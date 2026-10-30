import type { ReleasesData } from './releases.data.js';

export const APP_PACKAGE = 'com.kelsos.mbrc';

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${APP_PACKAGE}`;

/** The GitHub build's APK from the latest app release, if the release fetch succeeded. */
export function githubApk(releases: ReleasesData) {
  return releases.app?.assets.find(a => a.name.includes('github') && a.name.endsWith('.apk'));
}
