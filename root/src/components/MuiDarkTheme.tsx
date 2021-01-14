import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import React from "react"

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#fff",
        },
    },
    typography: {
        fontFamily: "Open Sans,sans-serif",
    },
})

interface MuiDarkThemeProps {
    children: JSX.Element | JSX.Element[]
}

const MuiDarkTheme = (props: MuiDarkThemeProps) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)

export default MuiDarkTheme
