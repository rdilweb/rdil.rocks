"use strict"

process.on("unhandledRejection", (err) => {
    throw err
})

const fs = require("fs-extra")

console.log("Copying public folder.")
fs.copySync("public", "build", {
    dereference: true,
})
