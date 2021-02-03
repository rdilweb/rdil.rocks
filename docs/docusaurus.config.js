/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "RDIL Docs",
    tagline: "Documentation for most of RDIL's projects.",
    url: "https://rdil.rocks",
    baseUrl: "/docs/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "https://rdil.rocks/favicon.ico",
    organizationName: "rdilweb",
    projectName: "rdil.rocks",
    themeConfig: {
        navbar: {
            title: "RDIL Docs",
            logo: {
                src: "/rdil.png",
            },
            items: [
                {
                    to: "/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/rdilweb/rdil.rocks",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Reece Dunham.`,
        },
    },
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                sidebarPath: require.resolve("./sidebars.js"),
                editUrl:
                    "https://github.com/rdilweb/rdil.rocks/edit/master/docs/",
                routeBasePath: "/",
                showLastUpdateTime: true,
                showLastUpdateAuthor: true,
                admonitions: {},
            },
        ],
    ],
    themes: [["@docusaurus/theme-classic", { customCss: require.resolve("./src/css/docs-infima.css") }]],
}
