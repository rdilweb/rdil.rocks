"use strict"

const fs = require("fs-extra")
const rimraf = require("rimraf").sync
const makeSitemap = require("./sitemap")

rimraf("build")
fs.copySync("root/out", "build")
fs.copySync("docs/build", "build/docs")
fs.writeFileSync("build/sitemap.xml", makeSitemap())
