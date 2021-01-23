import * as React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
    type: "dark",
    primary: {
        main: "#fff",
    },
    typography: {
        fontFamily: "Open Sans,sans-serif",
    },
})

function MuiTheme(props) {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default MuiTheme
