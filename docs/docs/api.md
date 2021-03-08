---
id: api
title: API
slug: /api
---

The RDIL API is able to perform certain tasks that help out in different ways.

## Base Endpoint

The production version is hosted at `https://backend.rdil.rocks/`.

## HyperiumJailbreak Specifics

| **HTTP Method** | **Endpoint**                    | **Description**                   |
| --------------- | ------------------------------- | --------------------------------- |
| `GET`           | `/words.txt`                    | Get the NickHider word list.      |
| `GET`           | `/levelhead_config_mirror.json` | Get the Levelhead config file.    |

## Hypixel Timers

| **HTTP Method** | **Endpoint**           | **Description**                           |
| --------------- | ---------------------- | ----------------------------------------- |
| `GET`           | `/timers/dark-auction` | Get the time until the next dark auction. |

## Source

To prevent abuse, the server's source is no longer public.

## Privacy Policy

These details only apply to `backend.rdil.rocks`.

When you make a request to the API, your request is processed by [Cloudflare](https://cloudflare.com/privacypolicy/), and then us.
We do keep logs of visits, which are one-line strings that contain the following infomation:

-   The IP that made the request
-   The timestamp
-   The request method (e.g. `POST`)
-   The HTTP protocol version you are using
-   The response code (e.g. `200` or `404`)
-   The requested endpoint
-   How long it took the server to provide a response in seconds

In addition, we make these promises about the data:

-   We _do not_ keep these logs more than two months.
-   We _do not_ sell this data.
