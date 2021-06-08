import React from "react"
import "../css/base.css"
import Head from "next/head"
import { AppProps } from "next/app"

export default function App(props: AppProps) {
    const { Component, pageProps } = props

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles)
        }
    }, [])

    return (
        <React.Fragment>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta charSet="utf-8" />
                <meta property="og:locale" content="en_US" />
                <meta name="msapplication-TileColor" content="#303f9f" />
                <meta name="theme-color" content="#303f9f" />
                <meta property="og:site_name" content="RDIL's Site" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@rdil_pickle" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    )
}
