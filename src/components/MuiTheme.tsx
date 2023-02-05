import * as React from "react"
import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff",
        },
    },
    typography: {
        fontFamily: "Open Sans,sans-serif",
    },
})
