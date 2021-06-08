import React from "react"
import Head from "next/head"

export interface SeoProps {
    title: string
    page: string
    description?: string
}

export default function Seo(props: SeoProps) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta property="og:title" content={props.title} />
            <meta
                name="description"
                content={
                    props.description ||
                    "Official website of RDIL, a coder, designer of websites, and open-source lover."
                }
            />
            <meta
                property="og:description"
                content={
                    props.description ||
                    "Official website of RDIL, a coder, designer of websites, and open-source lover."
                }
            />
            <meta
                property="og:url"
                content={`https://rdil.rocks${props.page}`}
            />
            <meta property="twitter:title" content={props.title} />
        </Head>
    )
}
