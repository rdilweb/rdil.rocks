import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/Seo"
import NavBar from "../components/NavBar"
import "../css/base.css"
import { Card, Grid } from "@material-ui/core"
import DevTo from "../icons/DevTo"
import Heart from "../icons/Heart"

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
                    {data.allDevArticles.edges
                        .map((edge) => edge.node.article)
                        .map((article) => {
                            return (
                                <Grid item xs={12} sm={6} key={article.slug}>
                                    <Card className="card">
                                        <article
                                            className="post-list-item"
                                            itemScope
                                            itemType="http://schema.org/Article"
                                        >
                                            <header>
                                                <h2>
                                                    <a
                                                        href={article.url}
                                                        itemProp="url"
                                                    >
                                                        <span itemProp="headline">
                                                            {article.title}
                                                        </span>
                                                    </a>{" "}
                                                    <DevTo />
                                                </h2>
                                                <small>
                                                    {article.created_at}
                                                </small>
                                            </header>
                                            <section>
                                                <p itemProp="description">
                                                    {article.description}
                                                </p>
                                            </section>
                                        </article>
                                    </Card>
                                </Grid>
                            )
                        })}
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Card className="card">
                                <article
                                    className="post-list-item"
                                    itemScope
                                    itemType="http://schema.org/Article"
                                >
                                    <header>
                                        <h2>
                                            <span itemProp="headline">
                                                Sponsor Update #1
                                            </span>
                                            {" "}
                                            <Heart />
                                        </h2>
                                        <small>
                                            February 6, 2021
                                        </small>
                                    </header>
                                    <section>
                                        <p itemProp="description">This post is only available to my <a href="https://github.com/sponsors/RDIL">GitHub Sponsors</a>.</p>
                                    </section>
                                </article>
                            </Card>
                        </Grid>
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
        allDevArticles {
            edges {
                node {
                    article {
                        slug
                        created_at(formatString: "MMMM DD, YYYY")
                        description
                        title
                        url
                    }
                }
            }
        }
    }
`
