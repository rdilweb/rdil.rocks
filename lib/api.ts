import fs from "fs"
import { join } from "path"
import matter, { GrayMatterFile } from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

const postsDirectory = "src/blog"

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory)
}

export type Post = GrayMatterFile<string> & {
    title?: string
    date?: string
    slug?: string
    description?: string
}

type FrontMatterKey = keyof (GrayMatterFile<string> & { slug: string } & Record<string, string>)

export function getPostBySlug(slug: string, fields: FrontMatterKey[] = []): Post {
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const items: GrayMatterFile<string> = {} as any

    // Ensure only the minimal needed data is exposed
    for (let field of fields) {
        if (field === "slug") {
            items[field] = realSlug
        }

        if (field === "content") {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    }

    return items
}

export async function getAllPosts(fields: FrontMatterKey[] = []) {
    const slugs = getPostSlugs()
    let posts: Post[] = []

    for (let slug of slugs) {
        posts.push(getPostBySlug(slug, fields))
    }

    // sort posts by date in descending order
    posts = posts.sort((post1, post2) => (
        (post1.date || 0) > (post2.date || 0) ? -1 : 1)
    )
    return posts
}
