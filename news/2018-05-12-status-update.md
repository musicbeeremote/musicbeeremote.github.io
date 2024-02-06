---
layout: news-item
title: Status Update
subtitle: Application Development
date: 2018-05-12 10:00:00
author: "Konstantinos Paparas"
gravatar: '81cf01a2e33f4bfbddb37f43818841e0'
bsky: "kelsos.bsky.social"
categories: [ news ]
---

Project continues with focus on optimization, particularly improving library metadata sync
(reduced from 5-6 minutes to 16-17 seconds for 16,000 tracks). New features planned include radio station sync,
output switching, and library view sorting. Users encouraged to report issues on GitHub.

---

Hello everyone,

I will have to apologize for the lack of updates, work and commuting usually don't leave me enough time or energy to
focus on the Remote application.

This doesn't mean that the application development is abandoned.
When I manage to get some energy I’m still working on optimizing the application.
I’m also taking in mind issues reported by every one of you for the next release.

If you encounter any issue feel free to contact me, but keep in mind that I may take a while to answer. Also if you’ve
encountered any issues with the application functionality please feel free to open tickets on Github. I’m always
considering suggestions for the improvement of the application.

Since last year I’ve been working on a major rewrite of both the plugin and the application. The plugin part is almost
done, but I’m still struggling a little bit with improvements and optimizations on the application functionality.

My greatest focus was the library metadata syncing mechanism. I’m currently in the process of rewriting a big part of
this and first results so great improvements. Syncing speed for a library of 16000 tracks in the time has been reduced
from around 5-6 minutes to 16-17 seconds.

I’m also working on optimizing the caching of data to avoid situations where errors during sync would leave the library
half synced.

The new features planned for the next version release include Radio station sync and output switching from the remote
application. Also, I’m working on sorting functionality for the library view.

Regards Konstantinos
