---
outline: deep
prev:
  text: Guide Overview
  link: /help/1.6/
next:
  text: Player
  link: /help/1.6/player
---

# Getting Started

## Installation

There are two ways to install the application:

### GitHub Release (recommended)

Download the latest APK from the [GitHub Releases](https://github.com/musicbeeremote/mbrc/releases/latest) page. Two variants are available:

- **GitHub release** — Clean build without analytics or crash reporting
- **Play release** — Includes Firebase Crashlytics for crash tracking

To install, download the APK on your device and enable installation from unknown sources if prompted.

### Google Play Store

The application will be available on the Google Play Store soon. Check the [website](https://mbrc.kelsos.net) for updates.

## Connection

### Automatic Discovery

When you first start the connection, the app automatically attempts to discover the MusicBee plugin on your local network. If a host is found, it connects without requiring any manual configuration.

### Navigation Drawer

<Row>
  <Phone src="/img/help/1.6/07_drawer_connected.webp" alt="Connected" />
  <Phone src="/img/help/1.6/08_drawer_disconnected.webp" alt="Disconnected" />
</Row>

The navigation drawer is the main way to move between screens. At the top, the **connection button** shows the current status:

- **Green** — Connected (shows the connection name)
- **Animating** — Connecting or reconnecting (shows attempt count)
- **Grey** — Disconnected

Tap the connection button to connect or disconnect. Below it you'll find navigation to all screens: **Home** (player), **Queue**, **Library**, **Playlists**, **Radio**, **Connection Manager**, **Settings**, and **Help & Feedback**.

### Auto-Reconnect

If the connection drops unexpectedly, the app automatically attempts to reconnect up to 3 times over approximately 45 seconds. The drawer shows reconnection progress. If all attempts fail, the background service stops to conserve battery.
