import { Card, TextField } from "@material-ui/core"
import React from "react"
// @ts-ignore
import styles from "../components/hot-pocket-calculator.module.css"
import MuiDarkTheme from "../components/MuiDarkTheme"
import NavBar from "../components/NavBar"
import Seo from "../components/Seo"

const HOT_POCKETS_PER_HOUR = 60 / 3.5
const HOT_POCKETS_PER_DAY = Math.floor(HOT_POCKETS_PER_HOUR) * 24
const INIT = "0 Hot Pockets"

const HotPocketCalculator = () => {
    const yearsToHotPockets = (years) => {
        const hotPocketsPerYear = HOT_POCKETS_PER_DAY * 365
        return hotPocketsPerYear * years
    }

    const daysToHotPockets = (days) => HOT_POCKETS_PER_DAY * days

    const [currentYear, setCurrentYear] = React.useState<string>(INIT)
    const [currentDay, setCurrentDay] = React.useState<string>(INIT)
    const [yearResult, setYearResult] = React.useState<string>(INIT)
    const [dayResult, setDayResult] = React.useState<string>(INIT)

    function onYearUpdate(event: { target: { value: string } }): void {
        const val = event.target.value
        setCurrentYear(val)
        setYearResult(`${yearsToHotPockets(val)} Hot Pockets`)
    }

    function onDayUpdate(event: { target: { value: string } }): void {
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
            <MuiDarkTheme>
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
                        <Card className={styles["hot-pocket-card"]}>
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
                        <Card className={styles["hot-pocket-card"]}>
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
            </MuiDarkTheme>
        </>
    )
}

export default HotPocketCalculator
