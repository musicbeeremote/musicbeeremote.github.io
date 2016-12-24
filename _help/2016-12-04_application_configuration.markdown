---
layout:     help
title:      "Configuration"
category:   application
---

## Connection

In version 1.0.0 the application should normally be configured automatically.
There is a mechanism in place that runs the discovery functionality automatically
when the application starts and if a remote host is detected it should
connect without requiring input from the user.

If for some reason the automatic discovery doesn't work for you then
you have to configure the application manually.

You need two pieces of information in order to manually configure the application.
The first one is the **IP address** of the pc running the plugin.
This is available in the Address list of the plugin settings panel.

> **Important!** If you have multiple network interfaces keep in mind the the one
you need is the one that is in the same network as your Android device


The second one is the listening port *(the default is 3000)*. This is also
available on the plugin settings panel.

![Open Settings]({{site.baseurl}}/img/help/application/01_opening_settings.png)
{: .thumbnail }

In order to configure the connection manually you have to open the side
**navigation menu** select the **Settings** entry and when the settings
open you have to select the **Manager Connections**.

![Manage Connections]({{site.baseurl}}/img/help/application/02_opening_connection_manager.png)
{: .thumbnail }

This will open the connection manager screen where you either can
change the default settings, manually add, delete or edit existing connection settings,
or start the discovery function manually.

![Connection Manager]({{site.baseurl}}/img/help/application/03_the_connection_manager.png)
{: .thumbnail }

1. This represent a connection entry. You can see the name of the device in the
first line and the **IP address** and **Port** combination on the second line.

2. The check mark represents the default (active settings). If you have multiple
entries keep in mind that the app will try to connect to the one
with the check mark.

3. The popup menu of the connection manager offers you the options set
the selected connection settings as default, delete or edit the selected
connection settings.

4. It will initiate the automatic service discovery.

5. Opens a dialog to manually enter the connection settings. The IP address and port
can be found on the plugin's settings panel.

![Adding connection settings]({{site.baseurl}}/img/help/application/04_manually_adding_connection.png)
{: .thumbnail }

After adding the new connection *(and setting it defeault)* if everything is OK
the application should connect automatically.

## Other Settings

![Application Settings]({{site.baseurl}}/img/help/application/05_settings.png)
{: .thumbnail }

1. When enabled it performs a preselected action when there is an incoming call while the application is connected.
The option is disabled by default and requires the PHONE_STATE permission in order to work.
There are three actions that can be performed.

    * **Reduce Volume**: Reduces the volume to the 20% of the current volume
    * **Stop**: Stops the playback on incoming call.
    * **Pause**: Pauses the playing track on incoming call.

2. Enables the Notification shown by the application. This is by default enabled.
**Important!** *Keep in mind that due to recent changes in the way services work, the notification is
required to ensure the proper operation of the application.*

3. It should periodically check for updated versions of the plugin and notify the user about the updates.
Currently broken.

4. When enabled it keeps logs of the application operation.
These logs can be attached to the mail created by the **Feedback** screen.

5. This option is a leftover from pre v1.0.0 and it is planned to change how it works in v1.0.2.
It allows you to change the default action when pressing an item on the library,
(e.g. an Artist, Album etc). The available actions are **Play Now**,**Queue Last**, **Queue Next**,
and **Open Subcategory**, Open Subcategory is not available for Tracks.
This was useful in previous versions with the search functionality however
from version 1.0.2 this will affect only the tracks. It will allow you to
select the default action when clicking on a track entry. For Genres, Artists and Albums
it will open the view to display the subcategory data for the selected entry.