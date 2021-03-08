import React from "react"
import queryString from "query-string"
import axios from "axios"
import delay from "delay"
import Link from "next/link"
import Seo from "../../components/Seo"
import NavBar from "../../components/NavBar"
import { Card, Grid } from "@material-ui/core"
import DevTo from "../../icons/DevTo"
import Heart from "../../icons/Heart"
import { getAllPosts } from "../../../lib/api"

export default function BlogIndex({ devArticles, blogPosts }) {
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
                    {blogPosts.map((post) => {
                        const title = post.title || post.slug

                        return (
                            <Grid item xs={12} sm={6} key={post.slug}>
                                <Card className="card">
                                    <article
                                        className="post-list-item"
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <header>
                                            <h2>
                                                <Link
                                                    className="next-link"
                                                    href={`/blog/${post.slug}`}
                                                    itemProp="headline"
                                                >
                                                    {title}
                                                </Link>
                                            </h2>
                                            <small>{post.date}</small>
                                        </header>
                                        <section>
                                            <p itemProp="description">
                                                {post.description}
                                            </p>
                                        </section>
                                    </article>
                                </Card>
                            </Grid>
                        )
                    })}
                    {devArticles.map((article) => {
                        return (
                            <Grid item xs={12} sm={6} key={article.slug}>
                                <Card className="card">
                                    <article
                                        className="post-list-item"
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <header>
                                            <h2 itemProp="headline">
                                                <a
                                                    href={article.url}
                                                    itemProp="url"
                                                >
                                                    {article.title}
                                                </a>{" "}
                                                <DevTo />
                                            </h2>
                                            <small>
                                                {article.created_at.substring(
                                                    0,
                                                    10
                                                )}
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
                    <Grid item xs={12} sm={6}>
                        <Card className="card">
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <header>
                                    <h2 itemProp="headline">
                                        Sponsor Update #1 {""}
                                        <Heart />
                                    </h2>
                                    <small>February 6, 2021</small>
                                </header>
                                <section>
                                    <p itemProp="description">
                                        This post is only available to my{" "}
                                        <a href="https://github.com/sponsors/RDIL">
                                            GitHub Sponsors
                                        </a>
                                        .
                                    </p>
                                </section>
                            </article>
                        </Card>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const devArticles = []
    const params = queryString.stringify({
        username: "rdil",
    })

    const res = await axios.get(`https://dev.to/api/articles?${params}`, {
        headers: {
            "cache-control": "no-cache",
            pragma: "no-cache",
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "upgrade-insecure-requests": 1,
        },
    })

    const { data } = res

    for (const devArticle of data) {
        await delay(500)
        const devArticleResult = await axios(
            `https://dev.to/api/articles/${devArticle.id}`
        )

        const articleData = await devArticleResult.data
        const filteredArticleData = {}

        Object.keys(articleData).forEach((key) => {
            const REQUIRED_FIELDS = ["slug", "created_at", "title", "url", "description"]

            if (REQUIRED_FIELDS.includes(key)) {
                filteredArticleData[key] = articleData[key]
            }
        })

        devArticles.push(filteredArticleData)
    }

    return {
        props: {
            devArticles,
            blogPosts: await getAllPosts([
                "slug",
                "date",
                "title",
                "description",
            ]),
        },
    }
}
