import React from "react"
import NavBar from "../components/NavBar"
import Seo from "../components/Seo"
import { Card, TextField, ThemeProvider, createTheme } from "@mui/material"

const textFieldTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff",
        },
    },
})

const HOT_POCKETS_PER_HOUR = 60 / 3.5
const HOT_POCKETS_PER_DAY = Math.floor(HOT_POCKETS_PER_HOUR) * 24

export default function HotPocketCalculator() {
    const yearsToHotPockets = (years: number): number => {
        const hotPocketsPerYear = HOT_POCKETS_PER_DAY * 365
        return hotPocketsPerYear * years
    }

    const daysToHotPockets = (days: number): number =>
        HOT_POCKETS_PER_DAY * days

    const [currentYear, setCurrentYear] = React.useState<string>("0")
    const [currentDay, setCurrentDay] = React.useState<string>("0")
    const [yearResult, setYearResult] = React.useState<string>("0")
    const [dayResult, setDayResult] = React.useState<string>("0")

    function onYearUpdate(event) {
        const val = event.target.value
        setCurrentYear(val)
        setYearResult(`${yearsToHotPockets(val)} Hot Pockets`)
    }

    function onDayUpdate(event) {
        const val = event.target.value
        setCurrentDay(val)
        setDayResult(`${daysToHotPockets(val)} Hot Pockets`)
    }

    return (
        <>
            <Seo
                title="Hot Pocket Calculator | RDIL's Site"
                page="/hot-pocket-calculator"
            />
            <NavBar />
            <ThemeProvider theme={textFieldTheme}>
                <main>
                    <div>
                        <h1>Hot Pocket Calculator</h1>
                        <p>
                            This is a calculator that determines how many hot
                            pockets you could possibly make,{" "}
                            <i>one at a time</i>, in the amount of time you
                            specify.
                        </p>
                        <h2>Why?</h2>
                        <p>I was bored.</p>
                        <h2>Calculator</h2>
                        <Card className="card">
                            <h3>Years &rarr; Hot Pockets</h3>
                            <TextField
                                label="Years"
                                type="number"
                                value={currentYear}
                                onChange={onYearUpdate}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                            />
                            <p>Result: {yearResult}</p>
                        </Card>
                        <Card className="card">
                            <h3>Days &rarr; Hot Pockets</h3>
                            <TextField
                                label="Days"
                                type="number"
                                value={currentDay}
                                onChange={onDayUpdate}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                            />
                            <p>Result: {dayResult}</p>
                        </Card>
                    </div>
                </main>
            </ThemeProvider>
        </>
    )
}
