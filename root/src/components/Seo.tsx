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
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="msapplication-TileColor" content="#303f9f" />
            <meta name="theme-color" content="#303f9f" />
            <meta property="og:title" content={props.title} />
            <meta property="og:locale" content="en_US" />
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
            <meta property="og:site_name" content="RDIL's Site" />
            <meta name="twitter:card" content="summary" />
            <meta property="twitter:title" content={props.title} />
            <meta name="twitter:site" content="@rdil_pickle" />
        </Head>
    )
}