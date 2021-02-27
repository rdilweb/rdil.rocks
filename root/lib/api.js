import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

const postsDirectory = "src/blog"

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    for (let field of fields) {
        if (field === "slug") {
            items[field] = realSlug
        }

        if (field === "content") {
            items[field] = content
        }

        // if (field === "excerpt") {
        //     items[field] = await markdownToHtml(content.substring(0, 140))
        // }

        if (data[field]) {
            items[field] = data[field]
        }
    }

    return items
}

export async function getAllPosts(fields = []) {
    const slugs = getPostSlugs()
    let posts = []

    for (let slug of slugs) {
        posts.push(await getPostBySlug(slug, fields))
    }

    // sort posts by date in descending order
    posts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
