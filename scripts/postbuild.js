"use strict"

process.on("unhandledRejection", (err) => {
    throw err
})

const fs = require("fs-extra")

console.log("Copying cherry files.")
fs.copySync("cherry/build", "build/cherry", {
    dereference: true,
})
