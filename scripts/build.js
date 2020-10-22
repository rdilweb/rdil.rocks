"use strict"

process.on("unhandledRejection", (err) => {
    throw err
})

const chalk = require("chalk")
const fs = require("fs-extra")
const sass = require("sass")
const child_process = require("child_process")
const rimraf = require("rimraf").sync

function build() {
    console.log(chalk.blue("Creating an optimized production build...\n"))
    rimraf("build")

    console.log("[1/5] Copying public folder")
    fs.copySync("public", "build", {
        dereference: true,
    })

    console.log("[2/5] Compiling sass bundle")
    const out = sass.renderSync({
        file: "src/page-styles.scss",
        outputStyle: "compressed",
    })

    console.log("[3/5] Writing sass bundle")
    fs.writeFileSync("build/bundle.min.css", out.css)

    console.log("[4/5] Building cherry")
    child_process.execSync("cd cherry && yarn build")

    console.log("[5/5] Copying cherry files")
    fs.copySync("cherry/build", "build/cherry", {
        dereference: true,
    })

    console.log(chalk.greenBright("\nDone!"))
}

build()
