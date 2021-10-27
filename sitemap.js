"use strict"

const { readdirSync, readFileSync } = require("fs")

const ROOT_URLS = [
    "",
    "/blog",
    ...readdirSync("root/src/blog").map(
        (name) => `/blog/${name.replace(".md", "")}`
    ),
    "/code-style",
    "/hot-pocket-calculator",
    "/tools",
    "/timer",
    ...JSON.parse(readFileSync("docs/.docusaurus/sitemap-data.json").toString())
        .routesPaths,
]

const makeXmlEntry = (relUrl) => `\
    <url>
        <loc>https://rdil.rocks${relUrl}</loc>
        <changefreq>weekly</changefreq>
    </url>
`

module.exports = function makeSitemap() {
    return `\
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${ROOT_URLS.map((url) => makeXmlEntry(url)).join("")}
</urlset>`
}
