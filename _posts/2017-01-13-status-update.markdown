---
layout:     post
title:      Status Update
subtitle:   Site update
date:       2017-01-13 20:00:00
author:     "Konstantinos Paparas"
categories: news
---

Finally after all this time v1.0.0 is out containing library browsing and basic playlist support.
These days I spend some time to update the application website since it hasn't been updated
since it's original creation back in 2012-2013.

The new site uses the [jekyll](https://jekyllrb.com) platform in order to ease
the update of the news section.

Also the help section hasn't been updated since v0.9.x and thus is really
outdate since the application has changed since then both feature wise
and design wise. So a help update is also included in the site update.

Even though v1.0.1 is currently live in [Play Store](https://play.google.com/store/apps/details?id=com.kelsos.mbrc&hl=en)
the version of course is not without issues. I have received helpful feedback
from users and the plans are to work on these issues and release an update (v1.0.2) as soon
as the fixes are ready.

You can have a look at the currently open issues for the [Plugin](https://github.com/kelsos/mbrc-plugin/issues)
and the [Application](https://github.com/kelsos/mbrc/issues).

My plan is to create milestones and put any issues reported to milestones.
You can view the milestones to determine the progress of the version.
I will try to keep it updated as much as I am able.

After the release of v1.0.2 I plan to resume working on version 2.0.0.

## v2.0.0

The next major version of MusicBee Remote will containing a great number of
changes. However these changes mean that the v1.x.x and v2.x.x will be incompatible.

Some of the planned features for v2.0.0 are:

* Covers for the albums/tracks in the library view.
* Better album profile view.
* Ability to view/delete the playlist tracks.
* Ability to create new playlists and add tracks to existing once through
the library browser.

The new plugin/application will drop the TCP Socket approach currently used
and will use instead web technologies. All the APIs will be exposed as HTTP
calls and the messaging/notifications will be done through WebSockets.

Some of the reasons for this move is that it is easier to test,
it is build on libraries that have been tested and used on a really larger scale.
Also as a plus all actions will now be simple HTTP requests, for example you
could pause the playback by calling the url on your browser.

Another reason for this is that I would like after releasing v2.0.0 and
reaching a good state of features and stability to start working on
a web application that will offer similar functionality to the remote
but will be embedded in the plugin.

## Downloads
Since I already use the GitHub Releases for both the
[Plugin](https://github.com/kelsos/mbrc-plugin/releases)
and [Application](https://github.com/kelsos/mbrc/releases)
from now on all the downloads for plugin and apk will be available there.

Regards Konstantinos