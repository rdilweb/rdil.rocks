import { useRouter } from "next/router"
import markdownToHtml, { getPostBySlug, getAllPosts, Post } from "../../../lib/api"
import NavBar from "../../components/NavBar"
import Seo from "../../components/Seo"
import styles from "../../css/blog.module.css"
import Calendar from "@mui/icons-material/CalendarToday"

interface PostProps {
    post: Post
}

export default function Post({ post }: PostProps) {
    const router = useRouter()

    if (router.isFallback) {
        throw new Error("Not supported")
    }

    return (
        <>
            <NavBar />

            <>
                <Seo
                    title={`${post.title} | RDIL's Site`}
                    page={`/blog/${post.slug}`}
                />
                <main>
                    <article>
                        <section>
                            <h1>{post.title}</h1>
                            <div className={styles.blogMetadata}>
                                <Calendar className={styles.blogMetadata} />
                                {post.date}
                            </div>
                        </section>

                        <section>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content
                                }}
                            />
                        </section>
                    </article>
                </main>
            </>
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content"
    ])

    const content = await markdownToHtml(post.content || "")

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts(["slug"])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false
    }
}
