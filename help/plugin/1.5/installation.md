---
outline: deep
prev:
  text: Downloading
  link: /help/plugin/1.5/downloading
next:
  text: Configuration
  link: /help/plugin/1.5/configuration
---

# Installing the Plugin

Make sure MusicBee is **not running** during installation. The plugin files are in use while
it is open and cannot be replaced.

All three files — `mb_remote.dll`, `mbrc_core.dll` and `mbrc-helper.exe` — must end up in the
Plugins folder together.

## Using the installer

The installer is the simplest route for a standard MusicBee installation. It finds MusicBee,
copies the three files into place, and offers to add the firewall rule.

It is not digitally signed, so Windows may warn about an unknown publisher. As long as you
downloaded it from [GitHub](https://github.com/musicbeeremote/mbrc-plugin/releases) or the
[MusicBee Plugins page](http://getmusicbee.com/addons/plugins/75/musicbee-remote-plugin), you
can continue.

Because a standard MusicBee lives in `C:\Program Files (x86)`, the installer needs
administrator permission to write there.

## Manual installation from the zip

Extract the **contents** of the zip into the MusicBee Plugins folder:

- **Standard installation:** `C:\Program Files (x86)\MusicBee\Plugins`
- **Portable installation:** `<MusicBee folder>\Plugins`

Do not create a subfolder — MusicBee only looks in `Plugins` itself. `LICENSE` and
`README.txt` are in the zip for reference and do not need to be copied.

Start MusicBee afterwards. The settings dialog appears on first run.

## Microsoft Store MusicBee

The Store version keeps its plugins inside the app's own storage, which you cannot navigate to
sensibly in Explorer, so MusicBee installs the zip for you:

1. **MusicBee → Edit → Preferences**
2. Open the **Plugins** section
3. Press **Add Plugin**
4. Select the downloaded zip

MusicBee unpacks it into the right place. The MusicBee Remote settings dialog appears
afterwards.

::: tip
Use the zip for the Store version, not the installer — the installer writes to a normal
MusicBee installation and will not find the Store one.
:::

## Confirming it worked

Start MusicBee and open **Tools → MusicBee Remote**. The settings panel opens, and its footer
shows the plugin version — it should read **v1.5.0**.

If the entry is missing, check that the plugin is enabled under **Preferences → Plugins**, and
that all three files are in the Plugins folder.

## Updating later

Once 1.5.0 is installed you do not have to repeat any of this. The plugin can download and
install its own updates — see [Updating](/help/plugin/1.5/updating).
