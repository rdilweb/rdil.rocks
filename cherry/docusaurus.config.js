/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Cherry",
    tagline: "The Cherry Minecraft utility mod!",
    url: "https://rdil.rocks",
    baseUrl: "/cherry/",
    favicon: "https://rdil.rocks/favicon.ico",
    organizationName: "RDIL",
    projectName: "Cherry",
    themeConfig: {
        navbar: {
            title: "Cherry",
            logo: {
                alt: "Cherry Logo",
                src: "logo.png",
            },
            items: [
                {
                    to: "docs/features",
                    label: "Features",
                    position: "left",
                },
                {
                    to: "docs/downloads",
                    label: "Download",
                    position: "left",
                },
                {
                    href: "https://www.curseforge.com/minecraft/mc-mods/cherry",
                    label: "CurseForge",
                    position: "right",
                },
                {
                    href: "https://github.com/RDIL/Cherry",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Reece Dunham.`,
        },
    },
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                sidebarPath: require.resolve("./sidebars.js"),
                editUrl:
                    "https://github.com/rdilweb/rdil.rocks/edit/master/cherry/",
                showLastUpdateTime: true,
                showLastUpdateAuthor: true,
            },
        ],
        "@docusaurus/plugin-content-pages",
    ],
    themes: [
        [
            "@docusaurus/theme-classic",
            {
                customCss: require.resolve("./src/css/cherry-infima.css"),
            },
        ],
    ],
}
