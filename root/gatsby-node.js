const WebpackBar = require("webpackbar")

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        plugins: [new WebpackBar()],
    })
}
