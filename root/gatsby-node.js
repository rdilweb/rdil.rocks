const SizePlugin = require("size-plugin")
const WebpackBar = require("webpackbar")

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
    actions.setWebpackConfig({
        plugins: [
            new WebpackBar(),
            (stage === "build-javascript" || options.development) &&
                new SizePlugin({
                    writeFile: false,
                }),
        ].filter(Boolean),
    })
}
