import { useRouter } from "next/router"
import ErrorPage from "next/error"
import markdownToHtml, { getPostBySlug, getAllPosts } from "../../../lib/api"
import NavBar from "../../components/NavBar"
import Seo from "../../components/Seo"
import styles from "../../css/blog.module.css"
import Calendar from "@material-ui/icons/CalendarToday"

export default function Post({ post }) {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <>
            <NavBar />
            {router.isFallback ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <Seo
                        title={`${post.title} | RDIL's Site`}
                        page={post.slug?.substring(1) || `/blog/${post.id}`}
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
                                        __html: post.content,
                                    }}
                                />
                            </section>
                        </article>
                    </main>
                </>
            )}
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
    ])
    const content = await markdownToHtml(post.content || "")

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts(["slug"])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
