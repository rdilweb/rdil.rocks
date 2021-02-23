---
id: dnsr
title: DNSR Specification
sidebar_label: DNSR
slug: /specifications/dnsr
---

DNSR is a specification for displaying DNS records in a clean way.

:::tip Format

You can basically use any format for DNSR, but I recommend the use of [TOML](https://github.com/toml-lang/toml/) for its features.

:::

:::warning Provider-specific fields

Certain fields listed here are **only** for a certain provider or set of providers.
They will all start with the name of the provider (e.g. `cloudflare`, `namecheap`, or `godaddy`),
_and should be ommitted if you don't use that provider!_

:::

## Fields

### `domain`

Details about the domain itself.

Potential fields:

-   **`tld`** - The TLD of the domain (example: the TLD of "hello.com" is "com").
-   **`name`** - The part of the domain before the TLD (example: the `name` of "hello.com" is "hello").
-   **`dnssec`** - A boolean for if DNSSEC is enabled on the domain.
-   **`provider`** - The DNS provider for the domain (examples: "Cloudflare", "Namecheap").
-   **`namecheap_is_parked`** - A boolean for if your site is just parked via Namecheap.

### `records`

A namespace for the domain's DNS records.

#### `{TYPE}`

A namespace for all the records with a certain `{TYPE}`, for example `A` or `CNAME`.

##### `{SUBDOMAIN}`

:::important Naming the `{SUBDOMAIN}`

The `{SUBDOMAIN}` can be "@" for the root domain (a string if you are using TOML), for example:

```toml
[[records.a]]

[[records.a."@"]]
put_values = "here"
```

:::

Here are potential values you can put under this namespace:

-   **`ttl`** - The time to live integer. See [this guide](https://www.dnsknowledge.com/whatis/time-to-live-ttl/) for more information. If you are using the "Auto" setting from your provider, you can ommit this.
-   **`priority`** - The priority integer for MX records.
-   **`cloudflare_is_proxied`** - A boolean for if your site has Cloudflare's HTTP proxy enabled.
-   **`location`** - If the record points to a type such as a URL or IP, add it here as a string.
-   **`value`** - If the record is a text-based type (example: `TXT`, `SPF`), add it here as a string.
-   **`cloudflare_ruleset`** - A meta-string for if your site has a Cloudflare page rule enabled. Can be ommitted, "CUSTOM", or "DRAFTED".
-   **`dns_managed_by`** - If this specific record is managed by a different provider then your main one, put its name in this field.

## Example

For a real-world example, RDILWeb has published most of its DNS records in DNSR format [here](https://github.com/rdilweb/DNS-Records/).
