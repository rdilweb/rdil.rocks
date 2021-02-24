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
                {
                    filehandlers: [
                        "libraries/filehandlers/filehandlers-index",
                        "libraries/filehandlers/api",
                    ],
                },
                {
                    intutils: [
                        "libraries/intutils/intutils-home",
                        "libraries/intutils/api",
                    ],
                },
                "libraries/lcpy",
                "libraries/mkdocs-plugin-progress",
                "libraries/parse-repr",
                "libraries/static-server-rdil",
                {
                    Archived: [
                        "libraries/picklecore",
                    ],
                },
            ],
        },
        {
            Specifications: ["specifications/dnsr"],
        },
        "javadocs",
        {
            About: ["about/me", "about/rdilweb"],
        },
        "code-of-conduct",
        "license",
    ],
}
