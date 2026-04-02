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

## How does auto-reconnect work?

When the connection drops unexpectedly, the app will automatically attempt to reconnect
up to 3 times over approximately 45 seconds. You can see the reconnection progress in
the navigation drawer. If all attempts fail, the background service stops automatically
to conserve battery.

## How do I switch between list and grid view for albums?

On the Albums tab in the Library, tap the view switcher icon in the toolbar to toggle
between list and grid view. On tablets, grid view is enabled automatically.

## How do I sort my library?

On any library tab, tap the sort icon to open the sort options. You can choose different
sort fields (e.g., name, year for albums) and toggle between ascending and descending order.

## How do I rate tracks?

Tap the star icon on the player screen to open the rating dialog. You can set star ratings
(1-5), use bomb rating to mark tracks as disliked, or clear the rating entirely.
Half-star precision can be enabled in Settings.
