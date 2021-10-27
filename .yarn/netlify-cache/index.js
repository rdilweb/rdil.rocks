/*!
 * MIT License

Copyright (c) 2020 Jake Jarvis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Netlify Plugin: netlify-plugin-cache
// https://github.com/jakejarvis/netlify-plugin-cache
//
// This plugin is essentially a wrapper around Netlify's native `cache-utils`:
// https://github.com/netlify/build/blob/master/packages/cache-utils/README.md

module.exports = {
    // Try to restore cache before build begins, if it exists
    onPreBuild: async ({ utils: { cache }, inputs }) => {
        if (await cache.restore(inputs.paths)) {
            const files = await cache.list(inputs.paths)
            console.log(
                `Successfully restored: ${inputs.paths.join(", ")} ... ${
                    files.length
                } files in total.`
            )
        } else {
            console.log(
                `A cache of '${inputs.paths.join(", ")}' doesn't exist (yet).`
            )
        }
    },

    // Only save/update cache if build was successful
    onSuccess: async ({ utils: { cache, status }, inputs }) => {
        if (await cache.save(inputs.paths)) {
            const files = await cache.list(inputs.paths)
            console.log(
                `Successfully cached: ${inputs.paths.join(", ")} ... ${
                    files.length
                } files in total.`
            )

            // Show success & more detail in deploy summary
            status.show({
                title: `${files.length} files cached`,
                summary: "These will be restored on the next build! ⚡",
                text: `${inputs.paths.join(", ")}`,
            })
        } else {
            // This probably happened because the default `paths` is set, so provide instructions to fix
            console.log(
                `Attempted to cache: ${inputs.paths.join(
                    ", "
                )} ... but failed. :(`
            )
            console.log(
                "Try setting the 'paths' input appropriately in your netlify.toml configuration."
            )
            console.log("More details: https://jrvs.io/netlify-cache-usage")
        }
    },
}
