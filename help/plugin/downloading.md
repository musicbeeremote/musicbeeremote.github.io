---
outline: deep
prev:
  text: Plugin Guide
  link: /help/plugin/
next:
  text: Installation
  link: /help/plugin/installation
---

# Downloading the Plugin

![Downloading the Plugin](/img/help/plugin/01_downloading.webp)

Before using MusicBee Remote, you need to install the companion plugin on your PC. The current version is **v1.4.1**.

## Download Links

- [GitHub Releases](https://github.com/musicbeeremote/mbrc-plugin/releases/latest) — Always has the latest version
- [MusicBee Plugins page](http://getmusicbee.com/addons/plugins/75/musicbee-remote-plugin) — Also available through the MusicBee add-ons directory

## Available Formats

| File                        | Use case                                                           |
| --------------------------- | ------------------------------------------------------------------ |
| `musicbee_remote_1.4.1.exe` | Installer for standard MusicBee installations                      |
| `musicbee_remote_1.4.1.zip` | Zip archive for portable or Microsoft Store MusicBee installations |

SHA512 checksums are provided alongside each file for integrity verification.

## Verifying Downloads

To verify a downloaded file, open PowerShell and navigate to your download folder:

```powershell
cd Downloads
Get-FileHash -Path .\musicbee_remote_1.4.1.exe -Algorithm SHA512
```

Compare the output hash with the contents of the corresponding `.sha512` file.
