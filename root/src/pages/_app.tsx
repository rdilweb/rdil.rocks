import "../css/base.css"
import Head from "next/head"
import * as React from "react"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "../emotionCache"
import { theme } from "../components/MuiTheme"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function App(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props

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
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </React.Fragment>
    )
}
