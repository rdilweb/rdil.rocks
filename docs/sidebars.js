module.exports = {
    sidebar: [
        "index",
        "api",
        "security",
        "support-policy",
        {
            Libraries: [
                "libraries/area4",
                {
                    Bluejay: [
                        "libraries/bluejay/discord-sentry-reporting",
                        "libraries/bluejay/flask-rest-error-handling",
                    ],
                },
                "libraries/lcpy",
                "libraries/mkdocs-plugin-progress",
                "libraries/parse-repr",
                "libraries/static-server-rdil",
            ],
        },
        {
            Specifications: ["specifications/dnsr"],
        },
        "javadocs",
        {
            About: ["about/me", "about/rdilweb"],
        },
    ],
}
