---
layout:     help
title:      "Configuration"
category:   help
---

## Configuration

![Configuring the plugin]({{site.baseurl}}/img/help/plugin/08_first_run.png "Configuring the plugin")
{: .thumbnail }

During your first run the plugin setup dialog will appear.

**Important!** Changes will not be saved unless you save them.

![Range Filter]({{site.baseurl}}/img/help/plugin/09_range_filter.png "Range Filter")
{: .thumbnail }
![Specified Filter]({{site.baseurl}}/img/help/plugin/10_specified_filter.png "Specified Filter")
{: .thumbnail }

1. The first field displays the socket status. If the status is
*Running* it means that the plugin is active an listening for
incoming connection. This is the normal status and it should not be
Stopped. If your status is stopped then something has gone terribly wrong.

2. The first field is the plugin's listening port. This is important for the application
configuration. The default port is 3000 but it can change to accommodate your needs.
Make sure that the port you choose is not currently in use by any other application
on your computer.

3. The plugin supports IP filtering which means that it can essentially block
connections that have different addresses than the ones specified. By default
it is configured to accept all the incoming connections.

  * **Range Filter**: When you select the Range filter you essential block access
    to any device that has an address that doesn't belong to the specified range.
    e.g. You select 192.168.90.1 in the address field and 10 to the end part
    this will allow connections only from the IP addresses ***192.168.90.1**
    to **192.168.90.10**. Essentially if your phone has an IP address that is
    not in this range it will be denied access and it will be not able to connect.

    > **Important!** If you insert a reverse range e.g. *192.168.90.10 - 8*
     this effectively blocks all connections and no client will be able to
     actually connect on the plugin.

  * **Specified Filter**: It blocks all the addresses but allows connection for the whitelisted addresses.
    You can view the whitelisted addresses on the drop down menu.
    To add a new address in the whitelist you have to type it in the **Address** field and press
    the **+** button. The address will be added to the whitelist.
    To remove an address enter select the address from the
    drop down and press the **-** button. Essentially if you use this
    type of filtering and add for example the **192.168.1.2** and **192.168.1.3**
    addresses in the whitelist, your application will not be able to connect
    unless your Phone's IP address is either **192.168.1.2** or **192.168.1.3**.

4. In the address list you can see the IP addresses for the network interfaces on your PC.
In case the automatic detection of the connection settings doesn't work this should help you
manually configure the application along with the port. If you have more
than one network interfaces/addresses the one you need is the one that
is in the same network with your Android device.

5. In the latest version the plugin has the ability to enable debug logging. This can be done by
checking the checkbox Debug Log **(5)**. You can open the log directly by pressing the
**Open Log** button. This should open the log file on Notepad. You can find the log file under
**%AppData%\MusicBee\mb_remote\error.log**.

6. Opens the log file in Notepad.

7. In the latest version there is also a small exe included called firewall-utility. If you enable
the option, when saving the new settings the plugin will start the firewall-utility passing
the new port as parameter.
Since changing firewall rules requires administrative rights there will
be a prompt for permission to run as administrator. If the permission is given the utility will
automatically create a firewall rule allowing traffic through the port selected in the settings.

8. Saves and applies tha changes. If not pressed any change will be
lost as soon as the panel closes.

9. Opens this page on the default browser.

![Opening Settings]({{site.baseurl}}/img/help/plugin/11_opening_settings.png "Opening Settings")
{: .thumbnail }

If you ever need to reopen the settings panel after the first run you can do this by
opening the MusicBee menu going to **Tools** and selecting **MusicBee Remote**.:

> If you are unable to locate the menu entry you should check if the plugin
is actually enabled.

