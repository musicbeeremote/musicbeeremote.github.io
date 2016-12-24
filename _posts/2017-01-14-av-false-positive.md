---
layout:     post
title:      False Positive AV Alert
subtitle:   When using Windows Defender
date:       2017-01-13 21:00:00
author:     "Konstantinos Paparas"
categories: news
---

There have been reports that the plugin installer is marked as malware
by Windows Defender. This has been verified and I have submitted a dispute
to the Windows Malware Protection site so I am awaiting a response.

The plugin installer analysis is available at [VirusTotal](https://www.virustotal.com/en/file/e7a3c011f12491610e3816ae9c8bcaa2327ea55e2b194116601a3e6e4350575b/analysis/1484248223/).
It seems that two engines mark the plugin as malicious but non of the major
AntiVirus engines think so.

The installer is packaged using the
NSIS (Nullsoft Scriptable Install System).

The machines that create and upload the builds of the plugin both run
Avast Free Antivirus and there have been no reports for any infection
so I am pretty sure that these are false positives.

If you are using Windows Defender and you are still concerned or afraid
to install the plugin through the v1.0.0 exe, you can also try
the manual installation using the always present 7z (7zip) archive.


