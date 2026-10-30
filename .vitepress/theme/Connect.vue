<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { githubApk, PLAY_STORE_URL } from './app-downloads';
import { intentUrl, parseConnectLink, type ParseResult } from './connect-link';
import { data as releases } from './releases.data.js';

/** What the page says when there is no usable link, and what the store links are for. */
const MESSAGES = {
  newer: {
    title: 'Update MusicBee Remote',
    body: 'This QR code comes from a newer MusicBee plugin than your app understands. Update the app, then scan it again.',
    store: 'Update the app',
  },
  invalid: {
    title: 'This link is incomplete',
    body: 'Part of the connection details is missing or damaged. Scan the QR code in MusicBee again.',
    store: 'Get the app',
  },
  empty: {
    title: 'Connect your phone',
    body: 'The MusicBee Remote plugin shows a QR code in its setup and settings. Scan it with your Android phone\'s camera to open the app with this PC\'s details filled in.',
    store: 'Get the app',
  },
} as const;

const result = ref<ParseResult>();
const isAndroid = ref(false);
const copied = ref(false);

function read(): void {
  result.value = parseConnectLink(window.location.hash);
}

onMounted(() => {
  isAndroid.value = /Android/i.test(navigator.userAgent);
  read();
  window.addEventListener('hashchange', read);
});

onBeforeUnmount(() => window.removeEventListener('hashchange', read));

const link = computed(() => (result.value?.kind === 'ok' ? result.value.link : undefined));
const message = computed(() => (result.value && result.value.kind !== 'ok' ? MESSAGES[result.value.kind] : undefined));
const openUrl = computed(() => (link.value ? intentUrl(link.value) : undefined));
const addresses = computed(() => link.value?.hosts.map(host => `${host}:${link.value?.port}`) ?? []);
const appApk = githubApk(releases);

async function copyAddress(): Promise<void> {
  try {
    await navigator.clipboard.writeText(addresses.value[0] ?? '');
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  }
  catch {
    // The address stays on screen to type in by hand.
  }
}
</script>

<template>
  <section class="px-4 py-12 min-[600px]:px-6 min-[600px]:py-16">
    <div
      v-if="result"
      class="mx-auto max-w-[560px] rounded-2xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg)] px-6 py-10 text-center min-[600px]:px-8"
    >
      <template v-if="link">
        <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--vp-c-brand-1)]">
          MusicBee Remote
        </p>
        <h1 class="mb-3 text-3xl font-bold tracking-tight text-[var(--vp-c-text-1)]">
          Connect to {{ link.name ?? 'MusicBee' }}
        </h1>
        <p class="mb-8 text-base leading-[1.7] text-[var(--vp-c-text-2)]">
          <template v-if="isAndroid">
            Open the app to add this PC and connect to it.
          </template>
          <template v-else>
            Open this link on your Android phone. Scanning the QR code in MusicBee with the phone's camera does that for you.
          </template>
        </p>

        <a
          v-if="isAndroid"
          class="mb-8 inline-flex items-center rounded-lg bg-[var(--vp-c-brand-3)] px-6 py-3 text-base font-semibold text-white no-underline transition-colors duration-200 hover:bg-[var(--vp-c-brand-2)]"
          :href="openUrl"
        >
          Open in MusicBee Remote
        </a>

        <div class="mb-8 rounded-xl bg-[var(--mbrc-c-surface)] px-6 py-5 text-left">
          <p class="mb-3 text-sm font-semibold text-[var(--vp-c-text-1)]">
            Or enter it in the app
          </p>
          <ul class="m-0 list-none p-0">
            <li
              v-for="address in addresses"
              :key="address"
              class="whitespace-nowrap font-mono text-base text-[var(--vp-c-text-1)]"
            >
              {{ address }}
            </li>
          </ul>
          <p
            v-if="addresses.length > 1"
            class="mt-2 mb-0 text-[0.8125rem] text-[var(--vp-c-text-3)]"
          >
            The first one is the most likely; try the others if it does not connect.
          </p>
          <button
            type="button"
            class="mt-3 cursor-pointer text-[0.8125rem] font-medium text-[var(--vp-c-brand-1)] hover:underline"
            @click="copyAddress()"
          >
            {{ copied ? 'Copied' : 'Copy the address' }}
          </button>
          <p
            v-if="link.code"
            class="mt-4 mb-0 text-sm text-[var(--vp-c-text-2)]"
          >
            Pairing code <span class="font-mono font-semibold text-[var(--vp-c-text-1)]">{{ link.code }}</span>,
            valid for two minutes after MusicBee showed it.
          </p>
        </div>
      </template>

      <template v-else-if="message">
        <h1 class="mb-3 text-3xl font-bold tracking-tight text-[var(--vp-c-text-1)]">
          {{ message.title }}
        </h1>
        <p class="mb-8 text-base leading-[1.7] text-[var(--vp-c-text-2)]">
          {{ message.body }}
        </p>
      </template>

      <div class="flex flex-col items-center gap-3 border-t border-[var(--vp-c-divider)] pt-6">
        <p class="m-0 text-sm text-[var(--vp-c-text-2)]">
          {{ link ? 'Don\'t have the app?' : message?.store }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            class="inline-flex items-center transition-transform duration-200 hover:-translate-y-px"
            :href="PLAY_STORE_URL"
            aria-label="Get it on Google Play"
          >
            <img
              src="/img/google-play-badge.svg"
              alt="Get it on Google Play"
              class="block h-10 w-auto"
            />
          </a>
          <a
            v-if="appApk"
            class="text-[0.8125rem] font-medium text-[var(--vp-c-brand-1)] no-underline hover:underline"
            :href="appApk.url"
          >
            Download the APK
          </a>
        </div>
        <a
          class="text-[0.8125rem] font-medium text-[var(--vp-c-brand-1)] no-underline hover:underline"
          href="/help/"
        >
          Help with connecting &rarr;
        </a>
      </div>
    </div>
  </section>
</template>
