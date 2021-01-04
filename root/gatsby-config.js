const plugins = [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svgr",
    "gatsby-plugin-material-ui",
    {
        resolve: "gatsby-plugin-canonical-urls",
        options: {
            siteUrl: "https://rdil.rocks",
        },
    },
]

module.exports = { plugins }
