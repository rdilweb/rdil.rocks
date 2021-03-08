const { writeFileSync } = require("fs")

module.exports = function rdilSitemap() {
    return {
        name: "docusaurus-plugin-rdil-sitemap",

        postBuild({ routesPaths }) {
            writeFileSync(
                ".docusaurus/sitemap-data.json",
                JSON.stringify({ routesPaths })
            )
        },
    }
}
