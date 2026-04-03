---
outline: deep
---

# Application Guide (v1.6)

Welcome to the MusicBee Remote user guide. Select a section below to learn more.

<div class="guide-cards">
  <a href="./getting-started" class="guide-card">
    <span class="guide-card-icon">🚀</span>
    <span class="guide-card-title">Getting Started</span>
    <span class="guide-card-desc">Installation, connection setup, auto-reconnect</span>
  </a>
  <a href="./player" class="guide-card">
    <span class="guide-card-icon">🎵</span>
    <span class="guide-card-title">Player</span>
    <span class="guide-card-desc">Playback controls, ratings, lyrics, track details</span>
  </a>
  <a href="./library" class="guide-card">
    <span class="guide-card-icon">📚</span>
    <span class="guide-card-title">Library</span>
    <span class="guide-card-desc">Browse genres, artists, albums, tracks with sorting</span>
  </a>
  <a href="./queue" class="guide-card">
    <span class="guide-card-icon">📋</span>
    <span class="guide-card-title">Queue</span>
    <span class="guide-card-desc">Now playing queue management</span>
  </a>
  <a href="./playlists-radio" class="guide-card">
    <span class="guide-card-icon">📻</span>
    <span class="guide-card-title">Playlists & Radio</span>
    <span class="guide-card-desc">Playlist folders and radio stations</span>
  </a>
  <a href="./settings" class="guide-card">
    <span class="guide-card-icon">⚙️</span>
    <span class="guide-card-title">Settings & Connections</span>
    <span class="guide-card-desc">App settings, connection manager, feedback</span>
  </a>
  <a href="./extras" class="guide-card">
    <span class="guide-card-icon">✨</span>
    <span class="guide-card-title">Extras</span>
    <span class="guide-card-desc">Mini control, notification, widget</span>
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
