import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/Seo"
import NavBar from "../components/NavBar"
import "../css/base.css"
import { Card, Grid } from "@material-ui/core"

const BlogIndex = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes

    return (
        <>
            <NavBar />
            <Seo title="Blog | RDIL's Site" page="blog" />
            <main>
                <h1>Blog Posts</h1>
                <p>
                    Note: This is still a work in progress as content is being
                    migrated here from my other blog locations.
                </p>
                <Grid container justify="center" spacing={2}>
                    {posts.map((post) => {
                        const title =
                            post.frontmatter.title || post.frontmatter.slug

                        return (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                key={post.frontmatter.slug}
                            >
                                <Card className="card">
                                    <article
                                        className="post-list-item"
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <header>
                                            <h2>
                                                <Link
                                                    to={post.frontmatter.slug}
                                                    itemProp="url"
                                                >
                                                    <span itemProp="headline">
                                                        {title}
                                                    </span>
                                                </Link>
                                            </h2>
                                            <small>
                                                {post.frontmatter.date}
                                            </small>
                                        </header>
                                        <section>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: post.excerpt,
                                                }}
                                                itemProp="description"
                                            />
                                        </section>
                                    </article>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </main>
        </>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug
                }
            }
        }
    }
`
