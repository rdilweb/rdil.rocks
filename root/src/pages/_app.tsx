import type { AppProps } from "next/app"
import "../base.css"

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp