// Parses the plugin's QR code link (schema v1), with the same rules as the Android app:
// https://github.com/musicbeeremote/mbrc/issues/66

export const APP_PACKAGE = 'com.kelsos.mbrc';

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${APP_PACKAGE}`;

const SCHEMA_VERSION = 1;
const MAX_HOSTS = 8;
const MAX_NAME_LENGTH = 64;

export interface ConnectLink {
  hosts: string[];
  port: number;
  serverId?: string;
  name?: string;
  code?: string;
}

export type ParseResult =
  | { kind: 'empty' }
  | { kind: 'newer'; version: number }
  | { kind: 'invalid' }
  | { kind: 'ok'; link: ConnectLink };

function parseIpv4(value: string): number[] | undefined {
  const parts = value.split('.');
  if (parts.length !== 4 || parts.some(part => !/^\d{1,3}$/.test(part)))
    return undefined;
  const octets = parts.map(Number);
  return octets.every(octet => octet <= 255) ? octets : undefined;
}

/** The ranges a LAN host can have: RFC 1918 plus the 100.64/10 overlay range Tailscale uses. */
function isPrivateIpv4(value: string): boolean {
  const octets = parseIpv4(value);
  if (!octets)
    return false;
  const [a, b] = octets;
  return a === 10
    || (a === 172 && b >= 16 && b <= 31)
    || (a === 192 && b === 168)
    || (a === 100 && b >= 64 && b <= 127);
}

/** Reads the payload from a fragment or query string, with or without its leading `#` or `?`. */
export function parseConnectLink(payload: string): ParseResult {
  const params = new URLSearchParams(payload.replace(/^[#?]/, ''));
  if (!params.has('v'))
    return { kind: 'empty' };

  const version = Number(params.get('v'));
  if (Number.isInteger(version) && version > SCHEMA_VERSION)
    return { kind: 'newer', version };

  const hosts = parseHosts(params.get('h'));
  const port = parsePort(params.get('p'));
  const code = parseCode(params.get('c'));
  if (version !== SCHEMA_VERSION || !hosts || !port || code === null)
    return { kind: 'invalid' };

  return { kind: 'ok', link: { hosts, port, code, ...parseIdentity(params) } };
}

function parseIdentity(params: URLSearchParams): Pick<ConnectLink, 'serverId' | 'name'> {
  return {
    serverId: params.get('id') || undefined,
    name: params.get('n')?.trim().slice(0, MAX_NAME_LENGTH) || undefined,
  };
}

/** Undefined when absent, null when present but not six digits. */
function parseCode(value: string | null): string | undefined | null {
  if (value === null)
    return undefined;
  return /^\d{6}$/.test(value) ? value : null;
}

/** The private addresses in `h`; undefined when it lists too many or none survive. */
function parseHosts(value: string | null): string[] | undefined {
  const listed = (value ?? '').split(',').filter(Boolean);
  const hosts = listed.filter(isPrivateIpv4);
  return listed.length <= MAX_HOSTS && hosts.length > 0 ? hosts : undefined;
}

function parsePort(value: string | null): number | undefined {
  const port = Number(value);
  return Number.isInteger(port) && port >= 1 && port <= 65535 ? port : undefined;
}

function serialize(link: ConnectLink): string {
  const params = new URLSearchParams();
  params.set('v', String(SCHEMA_VERSION));
  params.set('h', link.hosts.join(','));
  params.set('p', String(link.port));
  if (link.serverId)
    params.set('id', link.serverId);
  if (link.name)
    params.set('n', link.name);
  if (link.code)
    params.set('c', link.code);
  return params.toString().replaceAll('%2C', ',').replaceAll('+', '%20');
}

/**
 * An Android intent link that opens the app with this payload, or the Play Store when the
 * app is missing.
 *
 * Chrome keeps a same-site link in the browser even when the app holds the App Link, so the
 * page needs an intent. Its `#` is taken by the intent syntax, which moves the payload into
 * the query; the intent never loads a URL, so the query reaches no server.
 */
export function intentUrl(link: ConnectLink, host: string): string {
  const fallback = encodeURIComponent(PLAY_STORE_URL);
  return `intent://${host}/connect?${serialize(link)}#Intent;scheme=https;package=${APP_PACKAGE};S.browser_fallback_url=${fallback};end`;
}
