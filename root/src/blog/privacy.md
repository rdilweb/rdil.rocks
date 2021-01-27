---
title: Privacy By RDIL
slug: "/blog/privacy"
date: "2021-01-27"
---

Note: This content was originally from [privacy.rdil.rocks](https://github.com/rdilweb/privacy), but has been moved here for maintainability.

[Content License](https://github.com/rdilweb/rdil.rocks/blob/master/LICENSE.blog.md)

[Improve this page (it's open source!)](https://github.com/rdilweb/rdil.rocks/blob/master/root/src/blog/privacy.md)

Welcome to my privacy page. Here you can find a lot of my thoughts on privacy and related concepts that I find important and fight for.

## Table of Contents

-   [Foreword](#foreword)
-   [Tracking on the Web](#tracking-on-the-web)
    -   [Analytics](#analytics)
    -   [Advertisments](#advertisments)
    -   [Avoidance](#avoidance)
-   [Telemetry](#telemetry)
    -   [macOS / iOS](#macos--ios)
    -   [Windows](#windows)
    -   [Unix](#unix)
-   [Contributing](#contributing)
-   [Blog Posts](#blog-posts)

## Foreword

Hello! Thank you for coming.
Before I begin, I need to say a few things.
First, anything I say here is my personal opinion. This is only fact when stated.
Second, any companies, organizations, or other entities mentioned in a negative light or what could be percieved as a negative feeling should not be attacked.
I do not mean to start any fights.
I would like to start a conversation over this however!

## Tracking on the Web

### Analytics

This first section is going to be about the topic I think that I know best, which is tracking on the web.
I don't have a problem with a business getting how many times the same user has looked at a website, or how long they looked at it,
what I am fighting against is products like Google Analytics.
Google Analytics is marketed as the way to "Get to know your customers".
This sounds great in concept, but in reality, it is much worse then anyone may assume at first glance.
After scrolling down on the page, one can notice a subheader titled "Get insights only Google can give."
This is essentially true, because Google builds data profiles on anybody it can get its tracking beacons on
at a very large scale. Think about how many sites have Google Analytics on them. A _lot_.

If you are a business, and you rely on Google Analytics right now, you should switch to a different provider,
which doesn't value consumer data over consumers. I would suggest going for a privacy-focused product such as:

-   [Fathom](https://usefathom.com/)
-   [Matomo](https://matomo.org/)
-   [Ping](https://github.com/parkr/ping)

### Advertisments

Most advertising companies will attempt to track you, so that the ads you see are more tailored to your prefrences, views, etc.
For example: if an advertisment displaying a statement against your political views can convince you to click on it, then the advertiser can easily see that more advertising like it can help to convince or reinforce certain views.
Remember: Their job is to get you to <span style="cursor: pointer; text-decoration: underline" onClick="window.alert('Did you read what I just said, or did you just click this to see what it does?');">click</span>.
See the avoidance section on how to stop this!

### Avoidance

If you, as the consumer, want to avoid this tracking, you can go about this in many ways.
At the **very least**, you should get the [Google Analytics opt-out extension](https://tools.google.com/dlpage/gaoptout), which disables it for the most part.
The only problem is that this only blocks Google. To be completely private, you should use these tools:

-   [The Onion Router (Tor)](https://torproject.org/) - a browser that uses multi-layered routing to send your traffic through different servers, in an encrypted fashion.
-   [Tails](https://tails.boum.org/) - an operating system based on Debian that routes all your traffic through TOR.
-   [DuckDuckGo](https://duckduckgo.com/) - a search engine built on the concept that users shouldn't be tracked.

Don't want to use Tor? That's honestly not a great option for privacy, but you can attempt to replicate its affect with [Firefox](https://mozilla.org/firefox) and these Firefox addons:

-   [HTTPS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/) - force encrypted connections to the sites you visit
-   [Adblock](https://addons.mozilla.org/en-US/firefox/addon/adblock-plus/) - block advertisments that can track you
-   [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/) - automatically blocks trackers
-   [Facebook Container](https://addons.mozilla.org/en-US/firefox/addon/facebook-container/) - lock Facebook in a box so it can't track you - while also allowing you to continue using Facebook

These solutions should help out a _ton_.

## Telemetry

The meaning of telemetry as used here is sending statistics to a software company online.
Telemetry is an interesting topic, one which I am not as an expert on, but I will still proceed with discussing as it deserves a mention.

Here is a list of popular operating systems, and how they handle privacy:

#### macOS / iOS

To be honest, I don't know much about Apple's telemetry.

#### Windows

Windows telemetry is more publically known. Windows 10 has practially been [built to spy on its users](https://www.forbes.com/sites/gordonkelly/2015/11/02/microsoft-confirms-unstoppable-windows-10-tracking/).
When setting up Windows 10, unless you specifically opt-out of the sending of usage statistics, you can bet they will be sent.
Not only that, but after setting up, you will need to head into settings to disable all the additional settings related to telemetry.
Oh dear.

#### Unix

For Unix/Linux systems, it really just depends on the distro you are using. For that reason, I won't list them all here.
