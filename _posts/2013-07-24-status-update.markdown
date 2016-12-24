---
layout:     post
title:      Status Update
subtitle:   New Release
date:       2013-07-24 12:00:00
categories: news
---

A new release of the remote is getting close.

The new version will be a major update feature wise and it will pack a number of visual tweaks too. The plan is to release a test version at some point until the end of the week through the alpha or beta channel of Google Play, and after fixing any issues that will appear a version will get uploaded to the stable channel.

The new plugin and application are incompatible with the previously released version, which means that the new version of the plugin will not work with the old version of the application, and the new application will not function with the old version of the plugin. This is due to the fact that I changed the underlying protocol from xml to JSON. This means that both the plugin and the application should be updated.

The changes of the new version include a better tablet layout for 7inch tablets like Google Nexus 7, though unfortunately the previous idea for the always displayed now playing list on the landscape mode was temporarily abandoned, though it may return in a future version.

Other features of the new version, include 5 star rating for the playing track along with the ability to change the last.fm love/ban status of a track.

The navigation for the new version has been moved to the new Drawer Layout (much like the Gmail and Google Play Music sidebar menu).

The now playing list functionality have been reworked fixing various issues with the previous implementation. Furthermore search functionality has been implemented and the ability to, sort the list and remove tracks has been added.

Another newly implemented feature is the library search functionality. The is support for search by Genre, Artist, Album and Title. The user can either queue next or last the results, or either play them now. There is also functionality to get the artists of a genre or the albums of an artists, or the tracks of an album.

Finally another new feature is the ability to store multiple remote host settings. The current implementation will only try to connect to the one set as the default. Also a service discovery functionality has been implemented for wifi networks using multicast functionality.