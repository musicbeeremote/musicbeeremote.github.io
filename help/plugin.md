---
outline: deep
---

## Plugin

Find how do download install and configure the MusicBee Remote plugin.

### Downloading

![Downloading the Plugin](/img/help/plugin/01_downloading.webp)

Before starting to use MusicBee Remote, you first have to download the plugin on your PC.
You will require the latest release available if you install the application from Play
Store.

The plugin can be found either on [GitHub](https://github.com/kelsos/mbrc-plugin/releases)
or at the MusicBee [Plugins](http://getmusicbee.com/addons/plugins/75/musicbee-remote-plugin) page.

There are two actual ways to install the plugin on your computer. The automated way through
the `musicbee_remote\*.exe` installer and the manual installation by using the 7z archive.
7z is definitely the way to go if you’re running the portable version of MusicBee.

### Installation

If you’re doing the installation through the 7z archive,
the installation is pretty straightforward.
You have to extract the archive's contents in the **Plugins** folder of MusicBee.
If you are running the portable version, locate your **MusicBee\Plugins** folder
and extract the contents. If you just want to use the archive on a regular installation, you can
usually locate the Plugins folder under **C:\Program Files (x86)\MusicBee\Plugins**.

![Starting the Installer](/img/help/plugin/02_start_installer.webp)

If you already downloaded the installer, you can proceed with the installation.
The installer is not digitally signed, so if you have UAC enabled, you will
get a warning about the application being published by an unknown publisher.
Make sure that the Plugin was downloaded from one of the two sources
mentioned above, and you should be safe.

Once you start the installation, it can be completed in 5 simple steps, as you can see below.
Make sure that during the plugin installation, MusicBee is not running.

<img src="/img/help/plugin/03_installer_1.webp" alt="Step 1" height="280" width="360"/>
<img src="/img/help/plugin/04_installer_2.webp" alt="Step 2" height="280" width="360"/>
<img src="/img/help/plugin/05_installer_3.webp" alt="Step 3" height="280" width="360"/>
<img src="/img/help/plugin/06_installer_4.webp" alt="Step 4" height="280" width="360"/>
<img src="/img/help/plugin/07_installer_5.webp" alt="Step 5" height="280" width="360"/>

After the installation is complete, you can proceed with the configuration of the plugin

### Configuration

![Configuring the plugin](/img/help/plugin/08_first_run.webp 'Configuring the plugin')

During your first run, the plugin setup dialog will appear.

**Important!** Changes will not be saved unless you save them.

![Range Filter](/img/help/plugin/09_range_filter.webp 'Range Filter')
![Specified Filter](/img/help/plugin/10_specified_filter.webp 'Specified Filter')

1. The first field displays the socket status. If the status is
   _Running_ it means that the plugin is active, and it is listening for
   incoming connections. This is the normal status, and it means the plugin works as expected.
   If your status is `Stopped` then something has gone terribly wrong.

2. The first field is the plugin's listening port. This is important for the application
   configuration. The default port is 3000, but it can change to accommodate your needs.
   Make sure that the port you choose is not currently in use by any other application
   on your computer.

3. The plugin supports IP filtering, which means that it can block
   connections that have different addresses than the ones specified. By default,
   it is configured to accept all the incoming connections.

   - **Range Filter**: When you select the Range filter, you block access
     to any device that has an address that doesn't belong to the specified range.
     e.g., You select 192.168.90.1 in the address field and 10 to the end part
     this will allow connections only from the IP addresses **\*192.168.90.1** to **192.168.90.10**.
     If your phone has an IP address not in this range, it will be denied access, and it will be not able to connect.

     > **Important!**
     >
     > If you insert a reverse range e.g. _192.168.90.10 - 8_ this effectively blocks all connections and no client
     > will be able to actually connect on the plugin.

   - **Specified Filter**

     This is an allowlist.
     It blocks all incoming connections except the ones from the addresses that are in the allowlist.
     You can view the allowlisted addresses on the dropdown menu.

     To add a new address in the allowlist, you have to type it in the **Address** field and press the **+** button.
     The address will be added to the allowlist.

     To remove an address, enter select the address from the dropdown and press the **-** button.
     If you use this type of filtering and add, for example, the **192.168.1.2** and **192.168.1.3**
     addresses in the allowlist, your application will not be able to connect
     unless your Phone's IP address is either **192.168.1.2** or **192.168.1.3**.

4. In the address list you can see the IP addresses for the network interfaces on your PC.
   In case the automatic detection of the connection settings doesn't work, this should help you
   manually configure the application along with the port. If you have more
   than one network interfaces/ addresses, the one you need is the one that
   is in the same network with your Android device.

5. In the latest version the plugin can enable debug logging.
   This can be done by checking the checkbox Debug Log **(5)**.
   You can open the log directly by pressing the **Open Log** button.
   This should open the log file on Notepad.
   You can find the log file under **%AppData%\MusicBee\mb_remote\error.log**.

6. Opens the log file in Notepad.

7. In the latest version there is also a small exe included called firewall-utility. If you enable
   the option, when saving the new settings, the plugin will start the firewall-utility passing
   the new port as parameter.
   Since changing firewall rules requires administrative rights, there will
   be a prompt for permission to run as administrator. If the permission is given, the utility will
   automatically create a firewall rule allowing traffic through the port selected in the settings.

8. Saves and applies tha changes. If not pressed, any change will be lost as soon as the panel closes.

9. Opens this page on the default browser.

![Opening Settings](/img/help/plugin/11_opening_settings.webp 'Opening Settings')

If you ever need to reopen the settings panel after the first run, you can do this by
opening the MusicBee menu, going to **Tools** and selecting **MusicBee Remote**.:

> If you’re unable to locate the menu entry, you should check if the plugin
> is actually enabled.
