---
outline: deep
prev:
  text: Downloading
  link: /help/plugin/1.4/downloading
next:
  text: Configuration
  link: /help/plugin/1.4/configuration
---

# Installing the Plugin

::: warning Documentation for plugin v1.4.x
This page describes the **1.4.x** plugin. If you are running **1.5.0 or newer**, see the
[current plugin guide](/help/plugin/1.5/) instead — 1.5.0 changed how the plugin is
installed, updated and configured.
:::

Make sure MusicBee is **not running** during installation.

## Using the Installer

![Starting the Installer](/img/help/plugin/02_start_installer.webp)

The installer is not digitally signed, so you may see a warning about an unknown publisher if UAC is enabled. As long as you downloaded the plugin from [GitHub](https://github.com/musicbeeremote/mbrc-plugin/releases) or the [MusicBee Plugins page](http://getmusicbee.com/addons/plugins/75/musicbee-remote-plugin), you can safely proceed.

The installation completes in 5 steps:

<Row>
  <img src="/img/help/plugin/03_installer_1.webp" alt="Step 1" width="300" />
  <img src="/img/help/plugin/04_installer_2.webp" alt="Step 2" width="300" />
</Row>

<Row>
  <img src="/img/help/plugin/05_installer_3.webp" alt="Step 3" width="300" />
  <img src="/img/help/plugin/06_installer_4.webp" alt="Step 4" width="300" />
</Row>

<Row>
  <img src="/img/help/plugin/07_installer_5.webp" alt="Step 5" width="300" />
</Row>

## Manual Installation (Zip)

Extract the contents of the zip archive into the MusicBee **Plugins** folder:

- **Standard installation:** `C:\Program Files (x86)\MusicBee\Plugins`
- **Portable installation:** `<MusicBee folder>\Plugins`

After extraction, start MusicBee. The plugin settings dialog will appear on first run.

## Microsoft Store MusicBee

If you are using the Microsoft Store version of MusicBee:

1. Go to **MusicBee → Edit → Preferences**
2. Navigate to the **Plugins** settings
3. Click the **Add Plugin** button
4. Select the downloaded zip file

After selecting the zip, the MusicBee Remote plugin settings dialog will appear.
