"use strict"

process.on("unhandledRejection", (err) => {
    throw err
})

const chalk = require("chalk")
const fs = require("fs-extra")
const sass = require("sass")
const rimraf = require("rimraf").sync

function build() {
    console.log(chalk.blue("Creating an optimized production build...\n"))
    rimraf("build")

    console.log("[1/5] Copying public folder")
    copyPublic()

    console.log("[2/5] Compiling sass bundle")
    const out = sass.renderSync({
        file: "src/page-styles.scss",
        outputStyle: "compressed",
    })

    console.log("[3/5] Writing sass bundle")
    fs.writeFileSync("build/bundle.min.css", out.css)
}

function copyPublic() {
    fs.copySync("public", "build", {
        dereference: true,
    })
}

build()
