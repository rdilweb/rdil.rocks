const plugins = [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svgr",
    {
        resolve: "gatsby-plugin-canonical-urls",
        options: {
            siteUrl: "https://rdil.rocks",
        },
    },
]

module.exports = { plugins }
