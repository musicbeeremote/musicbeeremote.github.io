---
outline: deep
prev:
  text: Updating
  link: /help/plugin/1.5/updating
next: false
---

# Troubleshooting

## Logs

The plugin writes its log to `mbrc-core.log` in its storage folder. The quickest way there is
**Open log folder** in the settings panel, which opens the right folder whichever way MusicBee
is installed.

| Installation          | Storage folder                                                                     |
| --------------------- | ---------------------------------------------------------------------------------- |
| Installer or portable | `%AppData%\MusicBee\mb_remote`                                                     |
| Microsoft Store       | `%LocalAppData%\Packages\<MusicBee package>\LocalCache\Roaming\MusicBee\mb_remote` |

The Store path is not a mistake: Windows redirects an app's `%AppData%` into its own storage,
so the folder you see in Explorer is not the path MusicBee itself reports.

Files you may find there:

- `mbrc-core.log` — the plugin's own log; older runs are kept compressed alongside it
- `mbrc-helper.log` — written only when an update is applied; it is where an update that did
  nothing explains itself
- `core_settings.json` — every setting, including the few with no panel control
- `mbrc.redb` — the cached library metadata and artwork

### Files from earlier versions

The first time 1.5.0 starts it removes what earlier versions left behind — the pre-1.5.0 logs
(`mbrc.log`, `mbrc.0.log` and so on), the old `settings.xml` once its contents have been
carried over, and `firewall-utility.exe` from the plugins folder, which `mbrc-helper.exe`
replaced. On the installation this was tested against that was about 10 MB.

It only ever removes files this project shipped and no longer uses, by exact name. Nothing
else in either folder is touched, including files belonging to other MusicBee plugins.

Your settings are not affected: `settings.xml` is only removed once `core_settings.json`
exists, so the migration has already happened by then.

**Debug logging** in the settings panel increases the detail. Leave it off for normal use: it
is verbose, and the default level already records errors.

## Sending a problem report

The **Start capture** button in the Diagnostics group records what happens while you
reproduce a fault and saves it as a single file on your Desktop.

Before it starts, the plugin tells you exactly what the file will contain:

![What a problem report contains](/img/help/plugin/1.5/04_capture_confirm.webp)

1. Press **Start capture**.
2. Do the thing that goes wrong.
3. Press **Stop and save**.

While it runs, the panel shows how long it has been capturing and how long is left:

![A capture in progress](/img/help/plugin/1.5/05_capture_running.webp)

A capture stops on its own after 30 minutes, so forgetting about one cannot fill your disk.
**Cancel** discards it without saving anything.

The saved bundle contains the relevant slice of the log, your settings, your music folder
paths, and this PC's local network addresses — no passwords. Those paths and addresses are
kept because they are usually the point of the report, so look inside before sending it
anywhere. Attach it to a [GitHub issue](https://github.com/musicbeeremote/mbrc-plugin/issues).

::: tip
Capture for at least a few seconds. A capture that starts and stops immediately produces a
technically valid file with nothing useful in it.
:::

## The app cannot find the PC

Check, in order:

1. **The plugin is listening.** The settings panel shows the status and the port. If it is not
   running, the port is probably taken by something else — change it and press Save.
2. **The addresses match.** The **Reachable at** row lists the addresses the plugin is
   reachable on. Your phone must be on the same network as one of them. If several are listed,
   the right one is the network your phone is on.
3. **The firewall allows it.** See below.
4. **IP filtering is not blocking you.** If you set a range or an allowlist, confirm your
   phone's address is inside it. A reversed range blocks everything.

## Firewall

Windows must allow incoming connections on the plugin's port. With **Add a Windows firewall rule on save**
ticked, the plugin adds the rule itself using `mbrc-helper.exe`, which needs administrator
permission once — you will see a prompt.

If you prefer to add it manually, allow **TCP** on your chosen port (default 3000) for private
networks.

::: warning
The rule covers TCP only. Automatic discovery also uses UDP multicast, so if your phone cannot
find the PC automatically but connects fine once you enter the address by hand, discovery is
what the firewall is blocking.
:::

## An update did nothing

MusicBee closed and reopened but the version did not change, or it closed and did not reopen.
`mbrc-helper.log` in the storage folder says why — it records every step of an update, and it
is written even when the update fails.

Common causes:

- **MusicBee did not exit.** If it is set to minimise on close, the files cannot be replaced.
  The log will show the helper waiting and giving up.
- **The administrator prompt was declined.** Nothing is changed; press **Install and restart**
  again.
- **The download did not verify.** The plugin refuses it and says so. Press **Check now** to
  fetch it again.

If the plugin is missing entirely after an update, the previous files are in a `backup` folder
inside the storage folder — copy them back into the plugins folder to return to the version
you had.

## Reinstalling from scratch

Removing `core_settings.json` from the storage folder resets every setting to its default; the
plugin recreates it on the next start. (On a machine upgraded from 1.4.x this is only true from
1.5.0 onward — earlier builds would have restored your old `settings.xml` instead of falling
back to defaults.) Deleting `mbrc.redb` clears the cached library data,
which is rebuilt on the next connection — worth trying if artwork or metadata look wrong.
