---
layout:     help
title:      "Library"
category:   application
---

## Library Browse Screen

Initially the library browsing screen is empty and no data will be displayed.
In order to have your metadata displayed you have to manually sync the metadata.

You can also swipe to refresh each individual tab.

> **Important!**: please keep in mind that if you don't complete the metadata sync
the search features won't work.

The plans are to add an option for auto sync later, or autosync at least on the first connection
when there are no data available.

The sync operation might take a while depending on the size of your library.

![Refreshing the metadata]({{site.baseurl}}/img/help/application/08_library_sync.jpg)
{: .thumbnail }

In order to refresh the library metadata you have to open the overflow menu on the
top right of the ActionBar and select the **Refresh** entry.

![Refreshing the metadata]({{site.baseurl}}/img/help/application/09_library_sync.jpg)
{: .thumbnail }

After selecting the refresh option you will have to wait until the operation completes.
This might take a while depending on your library size.

![Refreshing the metadata]({{site.baseurl}}/img/help/application/10_library_sync.jpg)
{: .thumbnail }

> One user reported that for 60.000 tracks this was around 20 minutes.

![Library View]({{site.baseurl}}/img/help/application/11_library_view.jpg)
{: .thumbnail }

After the completion of the sync operation you should be able to see
the metadata for your library in each category **(1)**.

By default if you didn't change anything in the option pressing on one item
should open the related sub view.

* A **Genre** opens a list of all the Artists that have songs in this Genre.
* An **Artist** opens all the Albums of the Artist. *(Normally this should
show all the albums by the artist or where the artist appears.
 Unfortunately due to a bug currently the compilations will show no data.)*
* An **Album** will list all the Tracks belonging to the Album
* Pressing a **Track** will clear the queue and play that track.

> Currently due to some code left from the previous version you can
 change what happens when you press on an entry in the library view.
 This will be changed in an upcoming update to affect only the track view.

By opening the context menu on each entry **(2)** you get the option to
either **Play Now**, **Queue Last** or **Queue Next** all the tracks
matching the specific entry. Excluding the track view you also have
the option to open the sub category results.

If you for example select to **Play Now** a **Genre** it should queue all
the tracks matching the selected Genre for playback.

The application also provides a keyword search on the library metadata **(3)**.

![Library Search]({{site.baseurl}}/img/help/application/12_library_search.jpg)
{: .thumbnail }

In the library search view you can see all the results fuzzily matching
your keyword grouped by the metadata field they where found.

In this view you have access to the same actions as in the Tabs of the Library Browser.

