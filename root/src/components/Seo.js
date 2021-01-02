import React from "react"
import { Helmet } from "react-helmet"

const Seo = (props) => (
    <Helmet>
        <title>{props.title}</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#303f9f" />
        <meta name="theme-color" content="#303f9f" />
        <meta property="og:title" content={props.title} />
        <meta property="og:locale" content="en_US" />
        <meta
            name="description"
            content="Official website of RDIL, a coder, designer of websites, and open-source lover."
        />
        <meta
            property="og:description"
            content="Official website of RDIL, a coder, designer of websites, and open-source lover."
        />
        <link rel="canonical" href={`https://rdil.rocks/${props.page}`} />
        <meta property="og:url" content={`https://rdil.rocks/${props.page}`} />
        <meta property="og:site_name" content="RDIL's Site" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={props.title} />
        <meta name="twitter:site" content="@rdil_pickle" />
    </Helmet>
)

export default Seo
