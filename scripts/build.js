"use strict"

process.on("unhandledRejection", (err) => {
    throw err
})

const fs = require("fs-extra")
const sass = require("sass")

function build() {
    console.log("Building sass bundles.")
    const sassBundles = [
        ["src/base.scss", "build/bundle.min.css"],
        ["src/code-style-page.scss", "build/page-code-style.min.css"],
    ]

    sassBundles.forEach((bundle) => {
        const out = sass.renderSync({
            file: bundle[0],
            outputStyle: "compressed",
        })
        fs.writeFileSync(bundle[1], out.css)
    })
}

build()
