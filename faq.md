# FAQ

## Suddenly I can't connect anymore.

The most common cause for sudden loss of connectivity is a configuration reset of Windows Firewall.
If you find yourself suddenly unable to connect, make sure that the Windows Firewall is not
actively blocking the application from connecting to the plugin.

## Application loses connection and does not reconnect automatically

Modern Android is using aggressive power management features to kill applications
that are using background services.

To keep the connection active, MusicBee remote uses a background service to keep
an open connection with the plugin.

You might find yourself encountering an issue where application will disconnect requiring
manual intervention to reconnect.

In such a case you might need to manually configure Android to not terminate the service.

You can find more information on this on https://dontkillmyapp.com/
