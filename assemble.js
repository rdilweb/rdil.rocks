"use strict"

const fs = require("fs-extra")
const rimraf = require("rimraf").sync

rimraf("build")
fs.copySync("root/public", "build")
fs.copySync("cherry/build", "build/cherry")
fs.copySync("docs/build", "build/docs")
