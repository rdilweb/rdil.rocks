import { createTheme } from "@mui/material"
import { Open_Sans } from "next/font/google"

export const openSans = Open_Sans({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    preload: true,
    fallback: ["Helvetica", "Arial", "sans-serif"],
})

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff",
        },
    },
    typography: {
        fontFamily: openSans.style.fontFamily,
    },
})
