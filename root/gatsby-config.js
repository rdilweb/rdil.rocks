const plugins = [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
        resolve: "gatsby-plugin-canonical-urls",
        options: {
            siteUrl: "https://rdil.rocks",
        },
    },
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: `${__dirname}/src/blog`,
            name: "blog",
        },
    },
    "gatsby-transformer-remark",
]

module.exports = { plugins }
