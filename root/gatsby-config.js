const plugins = [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svgr",
    "gatsby-plugin-webpack-size",
    {
        resolve: "gatsby-plugin-canonical-urls",
        options: {
            siteUrl: "https://rdil.rocks",
        },
    },
]

module.exports = { plugins }
