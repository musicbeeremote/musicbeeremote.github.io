---
layout: news-item
title: Status Update
subtitle: Application Development
date: 2018-07-23 10:00:00
author: "Konstantinos Paparas"
gravatar: '81cf01a2e33f4bfbddb37f43818841e0'
bsky: "kelsos.bsky.social"
categories: [ news ]
---

Development entered hiatus in July 2018 due to relocation.
Prior to pause, significant progress made on plugin rewrite with new features like podcast support.
Android app rewrite was incomplete, featuring major architectural changes
(Room/Paging replacing DBFlow, MVVM replacing MVP) and improved sync mechanism.
Project open for collaboration, though currently inactive.

---

## Development hiatus

While the application hasn’t received an official update since February 2017 the development
and optimization process was continuing alas slowly.

As of July 2018, due to changing jobs and moving to another country,
the application development is indefinitely in hiatus.

### Current Status

I was in the process of doing a complete rewrite of both the plugin and mobile application. I believe that the plugin’s
rewrite was done and it should be close to release status without many bugs. It even has few new additions on the
protocol level to support a couple of new features, like podcast listing.

The Android rewrite unfortunately was not complete in time, and at the current state the application is crashing and not
working as expected.

During the rewrite there was a number of big changes done to the application:

- DBFlow was replaced with Room and Paging library.
- MVP architecture was replaced with MVVM using the new architecture components.
- Navigation was moved to the Navigation component.
- TargetSDK was updated for Android P and androix refactoring was in progress.
- Toothpick was replaced with Koin
- RxBus was removed

Also, the mechanism for the metadata syncing was completely revamped.
For starters sync will not clear the database every time a new sync started
but instead it will insert new entries, update existing and remove old entries,
so that the library will never be empty after the first sync.

There were also great optimizations in the syncing mechanism reducing the time required
to sync the metadata of 15000 tracks to 15–17 seconds from a few minutes with the release version.

Unfortunately the application still requires work, and I won’t be able to do it soon.
If anyone is interested though, to pick from where I left please feel free to contact
me so we can come to an arrangement.

Related [Medium Post](https://medium.com/@kelsos/musicbee-remote-status-update-ac86ce92131d)
