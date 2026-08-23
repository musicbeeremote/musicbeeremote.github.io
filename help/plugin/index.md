---
outline: deep
---

# Plugin Guide

Documentation for the MusicBee Remote plugin, the companion that runs on your PC.

The plugin changed substantially in 1.5.0 — it now updates itself, ships as three files, and
has a reorganised settings panel — so each version has its own guide. The version is shown in
the footer of the plugin's settings panel, under **Tools → MusicBee Remote**.

<div class="guide-cards">
  <a href="/help/plugin/1.5/" class="guide-card guide-card-featured">
    <span class="guide-card-badge">Latest</span>
    <span class="guide-card-icon">🔌</span>
    <span class="guide-card-title">Plugin Guide (v1.5)</span>
    <span class="guide-card-desc">For 1.5.0 and newer. Automatic updates, the new settings panel, and troubleshooting.</span>
  </a>
  <a href="/help/plugin/1.4/downloading" class="guide-card">
    <span class="guide-card-icon">📄</span>
    <span class="guide-card-title">Plugin Guide (v1.4)</span>
    <span class="guide-card-desc">For 1.4.1 and earlier. Download, install and configure the older plugin.</span>
  </a>
</div>

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

.guide-card {
  position: relative;
}

.guide-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(230, 81, 0, 0.08);
  text-decoration: none !important;
}

.guide-card-featured {
  border-color: var(--vp-c-brand-soft);
  background: rgba(230, 81, 0, 0.03);
}

.guide-card-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 8px;
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
