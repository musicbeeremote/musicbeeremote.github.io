# About MusicBee Remote

## What is MusicBee Remote

MusicBee Remote is a remote control application for Android, designed to control the
[MusicBee](https://getmusicbee.com/) music player from your mobile device.

It uses a client-server architecture based on TCP sockets, with the MusicBee plugin acting as a server
and the Android application acting as a client.

The application requires Android 6.0 (Marshmallow) or later and MusicBee v3.0.0 or later,
along with a working network connection. While it could be configured to work over cellular data,
a Wi-Fi connection on the same network as the MusicBee PC is recommended.

## Features

- **Playback control** — Play, pause, stop, next, previous, volume, mute, shuffle, repeat
- **Track information** — Artist, title, album, year, album art
- **Library browsing** — Browse by genre, artist, album, and track with sorting options
- **Album grid view** — Visual album browsing with auto-detection for tablets
- **Now Playing queue** — View, reorder, remove, and search tracks in the queue
- **Playlist support** — Browse playlists with folder navigation
- **Radio stations** — Browse and play radio stations
- **Ratings** — Star ratings (with half-star support), bomb ratings, and Last.fm love/ban
- **Track details** — Extended metadata including composer, genre, bitrate, and play statistics
- **Lyrics** — View lyrics for the currently playing track
- **Search** — Search across your entire music library
- **Notifications** — Media notification with playback controls
- **Themes** — Dark and light mode support
- **Auto-reconnect** — Resilient connection with automatic retry on disconnect
- **Widgets** — Resizable home screen widgets for quick control

## Development & Support

The application is developed and maintained by a single person. Both the Android app and the
MusicBee plugin are open source.

- **Application**: [musicbeeremote/mbrc](https://github.com/musicbeeremote/mbrc)
- **Plugin**: [musicbeeremote/mbrc-plugin](https://github.com/musicbeeremote/mbrc-plugin)

For bug reports and feature requests, please use the
[GitHub Issues](https://github.com/musicbeeremote/mbrc/issues) page.

## Contributors

**[Konstantinos Paparas](https://gr.linkedin.com/in/kelsos)** — Development of the application and plugin, design and graphics.

**[Jordan Georgiadis](https://www.linkedin.com/in/jordan-georgiadis)** — Concept and creation of the application logo.

**[Anastasios Papazoglou Chalikias](https://gr.linkedin.com/in/sushiperv)** — Graphics and layout for version 0.2.3.x and design refinement.

## Credits

Some of the artwork and lyrics shown in the documentation screenshots are from works released under Creative Commons licenses.

**[ProleteR](https://freemusicarchive.org/music/ProleteR)** — Album artwork from _Curses from Past Times_ (2012).
Licensed under [CC BY-NC-ND 3.0](https://creativecommons.org/licenses/by-nc-nd/3.0/).

**[Josh Woodward](https://www.joshwoodward.com)** — Lyrics from "Coffee" (2011).
Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

All other album artwork and trademarks appearing in screenshots are the property of their respective owners and are shown solely to illustrate the app's functionality. MusicBee Remote is not affiliated with or endorsed by any of the artists or labels shown.
