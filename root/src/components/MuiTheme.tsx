import * as React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

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

export interface MuiThemeProps {
    children: JSX.Element | JSX.Element[]
}

export default function MuiTheme({ children }: MuiThemeProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
