"use strict"

process.on("unhandledRejection", (err) => {
    throw err
})

const chalk = require("chalk")
const fs = require("fs-extra")
const sass = require("sass")
const path = require("path")
const rimraf = require("rimraf").sync

function build() {
    console.log(chalk.blue("Creating an optimized production build..."))
    rimraf("build")

    copyPublic()

    let paths = []

    const walk = (dirName) => fs.readdir(dirName, (e, files) => {
        files.forEach((file) => {
            const stats = fs.statSync(path.join(dirName, file))
            if (stats.isDirectory()) {
                paths.push(path.join(dirName, file))
                walk(path.join(dirName, file))
            }
        })
    })

    const out = sass.renderSync({ file: "src/page-styles.scss", outputStyle: "compressed" })
    fs.writeFileSync("build/bundle.css", out.css)

    walk("src")
}

function copyPublic() {
    fs.copySync("public", "build", {
        dereference: true,
    })
}

build()
