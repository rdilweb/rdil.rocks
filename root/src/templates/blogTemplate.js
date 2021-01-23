import React from "react"
import { graphql } from "gatsby"
import NavBar from "../components/NavBar"
import Calendar from "@material-ui/icons/CalendarToday"
import styles from "../css/blog.module.css"
import Seo from "../components/Seo"

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <>
            <NavBar />
            <Seo
                title={`${frontmatter.title} | RDIL's Site`}
                page={frontmatter.slug.substring(1)}
            />
            <main>
                <h1>{frontmatter.title}</h1>
                <div className={styles.blogMetadata}>
                    <Calendar className={styles.blogMetadata} />
                    {frontmatter.date}
                </div>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </main>
        </>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`
