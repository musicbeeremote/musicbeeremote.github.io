---
outline: deep
---

# Plugin Guide (v1.5)

How to download, install, configure and update the MusicBee Remote plugin, version 1.5.0 and
newer.

<div class="guide-cards">
  <a href="./downloading" class="guide-card">
    <span class="guide-card-icon">⬇️</span>
    <span class="guide-card-title">Downloading</span>
    <span class="guide-card-desc">Where to get it, and which file you need</span>
  </a>
  <a href="./installation" class="guide-card">
    <span class="guide-card-icon">📦</span>
    <span class="guide-card-title">Installation</span>
    <span class="guide-card-desc">Installer, zip, or Microsoft Store</span>
  </a>
  <a href="./configuration" class="guide-card">
    <span class="guide-card-icon">⚙️</span>
    <span class="guide-card-title">Configuration</span>
    <span class="guide-card-desc">Every group in the settings panel</span>
  </a>
  <a href="./updating" class="guide-card">
    <span class="guide-card-icon">🔄</span>
    <span class="guide-card-title">Updating</span>
    <span class="guide-card-desc">Automatic updates, channels, and when Windows asks permission</span>
  </a>
  <a href="./troubleshooting" class="guide-card">
    <span class="guide-card-icon">🩺</span>
    <span class="guide-card-title">Troubleshooting</span>
    <span class="guide-card-desc">Logs, problem reports, firewall, failed updates</span>
  </a>
</div>

## New in 1.5.0

- **The plugin updates itself.** It checks for a new release, verifies the signature, and
  installs it, see [Updating](./updating).
- **Three files instead of one.** `mb_remote.dll`, `mbrc_core.dll` and `mbrc-helper.exe` all
  belong in the Plugins folder.
- **A rebuilt settings panel**, grouped by topic, with the addresses the plugin is reachable
  on shown directly.
- **One-press problem reports**: capture a fault and attach the result to an issue.

Running 1.4.x? Use the [v1.4 guide](/help/plugin/1.4/downloading) instead.

<style>
.guide-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.guide-card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none !important;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.guide-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(230, 81, 0, 0.08);
  text-decoration: none !important;
}

.guide-card-icon {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.guide-card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.guide-card-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>
