---
outline: deep
prev:
  text: Plugin Guide
  link: /help/plugin/1.5/
next:
  text: Installation
  link: /help/plugin/1.5/installation
---

# Downloading the Plugin

Before using MusicBee Remote you need the companion plugin on your PC. The current version is
**v1.5.0**.

## Download links

- [GitHub Releases](https://github.com/musicbeeremote/mbrc-plugin/releases/latest) — always the latest version
- [MusicBee Plugins page](http://getmusicbee.com/addons/plugins/75/musicbee-remote-plugin) — the MusicBee add-ons directory

## Which file

| File                        | Use case                                                    |
| --------------------------- | ----------------------------------------------------------- |
| `musicbee_remote_1.5.0.exe` | Installer, for a standard MusicBee installation             |
| `musicbee_remote_1.5.0.zip` | Zip archive, for portable and Microsoft Store installations |

Both contain the same plugin. The zip is also what the automatic updater downloads.

## What is inside

From 1.5.0 the plugin ships as three files rather than one:

| File              | Purpose                                    |
| ----------------- | ------------------------------------------ |
| `mb_remote.dll`   | The MusicBee plugin itself                 |
| `mbrc_core.dll`   | The engine it runs on                      |
| `mbrc-helper.exe` | Adds the firewall rule and applies updates |

All three belong in the Plugins folder, side by side. Installing only `mb_remote.dll` will not
work.

::: tip Upgrading from 1.4.x
Install 1.5.0 over your existing installation — your settings are kept. The old
`firewall-utility.exe` from 1.4.x is no longer used and can be deleted; `mbrc-helper.exe`
replaces it.
:::

## Verifying your download

Each release publishes a `manifest.json` listing the SHA-512 of every file, together with a
`manifest.json.minisig` signature over it. That signature is what proves a download came from
this project — a checksum on its own only proves the file was not corrupted in transit.

To check a download yourself, open PowerShell in your download folder:

```powershell
Get-FileHash -Path .\musicbee_remote_1.5.0.zip -Algorithm SHA512
```

Compare the result with the `zip` entry in `manifest.json`.

You do not have to do any of this for automatic updates: the plugin verifies the signature and
every file's hash before it installs anything. See [Updating](/help/plugin/1.5/updating).
