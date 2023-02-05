import React from "react"
import { Grid } from "@mui/material"

interface Props {
    children: JSX.Element
}

const Centered = (props: Props) => {
    if (!props.children) return <div hidden />

    return (
        <Grid container justifyContent="center">
            {props.children}
        </Grid>
    )
}

export default Centered
