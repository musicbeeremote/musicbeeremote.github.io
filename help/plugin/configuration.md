---
outline: deep
prev:
  text: Installation
  link: /help/plugin/installation
next: false
---

# Configuring the Plugin

## First Run

![Plugin Settings](/img/help/plugin/08_first_run.webp)

On first run after installation, the plugin settings dialog appears automatically. Changes are **not saved** until you press the Save button.

## Settings

1. **Socket Status** — Shows whether the plugin is listening for connections. _Running_ means everything is working. _Stopped_ indicates a problem.

2. **Listening Port** — The port the plugin listens on (default: 3000). Make sure it's not in use by another application. You'll need this when configuring the Android app.

3. **IP Filtering** — Controls which devices can connect. By default, all connections are accepted.

4. **Address List** — Shows your PC's network interface addresses. Use this to manually configure the Android app if automatic discovery doesn't work. Choose the address on the same network as your Android device.

5. **Debug Log** — Enable debug logging for troubleshooting.

6. **Open Log** — Opens the log file in Notepad. The log is located at `%AppData%\MusicBee\mb_remote\error.log`.

7. **Firewall Utility** — When enabled, the plugin runs a utility that automatically creates a Windows Firewall rule for the selected port. This requires administrator permission.

8. **Save** — Saves and applies all changes. Any unsaved changes are lost when the dialog closes.

9. **Help** — Opens this documentation in your browser.

## IP Filtering

### Range Filter

![Range Filter](/img/help/plugin/09_range_filter.webp)

The range filter blocks connections from addresses outside a specified range. For example, setting `192.168.90.1` with an end of `10` allows connections only from `192.168.90.1` through `192.168.90.10`.

::: warning
A reverse range (e.g., 192.168.90.10 - 8) effectively blocks all connections.
:::

### Specified Filter

![Specified Filter](/img/help/plugin/10_specified_filter.webp)

The specified filter is an allowlist. Only addresses explicitly added can connect.

- **Add:** Type an address in the field and press **+**
- **Remove:** Select an address from the dropdown and press **-**

## Reopening Settings

![Opening Settings](/img/help/plugin/11_opening_settings.webp)

To reopen the settings after first run, go to **MusicBee menu → Tools → MusicBee Remote**.

::: tip
If you can't find the menu entry, check that the plugin is enabled in MusicBee's plugin settings.
:::
