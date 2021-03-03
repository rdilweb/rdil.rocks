/**
 * MIT License
 * Copyright (c) 2021 Reece Dunham
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import * as React from "react"
import {
    Button,
    Grid,
    Input,
    MenuItem,
    Paper,
    Select,
    Slider,
} from "@material-ui/core"
import Clock from "@material-ui/icons/Alarm"
import NavBar from "../components/NavBar"
import Seo from "../components/Seo"
import TimerLoadableSound from "../components/TimerLoadableSound"
import styles from "../css/timer.module.css"

const videos = ["Xylophone Notes", "Birds Chirping", "Bell"]
const ids = ["258OTDCrHg0", "54n9E_LwQvQ", "hrqIq5hBFSw"]
const videoStartTimestamps = [null, null, "6"]

const videoListComponents = videos.map((video, index) => (
    <MenuItem
        key={ids[index]}
        value={[ids[index], videoStartTimestamps[index]]}
    >
        {video}
    </MenuItem>
))

const prettySecondsValue = (secondsCount) =>
    secondsCount < 10 ? `0${secondsCount}` : `${secondsCount}`

export default function Timer() {
    const [isTimerRunning, setTimerIsRunning] = React.useState<boolean>(false)

    const [secondsValue, setSecondsValue] = React.useState<number>(0)
    const [minutesValue, setMinutesValue] = React.useState<number>(10)

    const [sound, setSound] = React.useState("")

    const handleSecondInputChange = (event) =>
        setSecondsValue(
            event.target.value === "" ? 0 : Number(event.target.value)
        )

    const handleMinuteInputChange = (event) =>
        setMinutesValue(
            event.target.value === "" ? 0 : Number(event.target.value)
        )

    const handleSoundChange = (event) => setSound(event.target.value)

    const handleSecondSwapping = () => {
        if (secondsValue < 0 || secondsValue > 60) {
            setSecondsValue(0)
        }
    }

    const handleMinuteSwapping = () => {
        if (minutesValue < 0 || minutesValue > 60) {
            setMinutesValue(0)
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            // the component constantly re-renders, and so every
            // time it rerenders on the second, it runs this
            if (isTimerRunning) {
                if (secondsValue < 1) {
                    if (!(minutesValue < 1)) {
                        setSecondsValue(59)
                        setMinutesValue(minutesValue - 1)
                    }
                } else {
                    setSecondsValue(secondsValue - 1)
                }
            }
        }, 1000)
    })

    return (
        <>
            <Seo title="Timer | RDIL's Site" page="/timer" />
            <NavBar />
            <main>
                <Paper className={styles.paper}>
                    <h1>
                        {!isTimerRunning
                            ? "Timer"
                            : `${minutesValue}:${prettySecondsValue(
                                  secondsValue
                              )}`}
                    </h1>
                    <br />
                    <div>
                        <Grid container justify="center" alignItems="center">
                            <div
                                hidden={isTimerRunning}
                                className={styles.small}
                            >
                                <br />
                                <p>Minutes</p>
                                <Slider
                                    value={
                                        typeof minutesValue === "number"
                                            ? minutesValue
                                            : 0
                                    }
                                    onChange={(_event, value) =>
                                        setMinutesValue(value)
                                    }
                                    max={60}
                                />
                                <Input
                                    className={styles.input}
                                    value={minutesValue}
                                    margin="dense"
                                    onChange={handleMinuteInputChange}
                                    onBlur={handleMinuteSwapping}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 60,
                                        type: "number",
                                    }}
                                />
                                <br />
                                <br />
                                <br />
                                <p>Seconds</p>
                                <Slider
                                    value={
                                        typeof secondsValue === "number"
                                            ? secondsValue
                                            : 0
                                    }
                                    onChange={(event, value) =>
                                        setSecondsValue(value)
                                    }
                                    max={59}
                                />
                                <Input
                                    className={styles.input}
                                    value={secondsValue}
                                    margin="dense"
                                    onChange={handleSecondInputChange}
                                    onBlur={handleSecondSwapping}
                                    inputProps={{
                                        step: 1,
                                        min: 0,
                                        max: 59,
                                        type: "number",
                                    }}
                                />
                                <br />
                                <br />
                                <br />
                                <p>Completion Sound</p>
                                <form autoComplete="off">
                                    <Select
                                        onChange={handleSoundChange}
                                        value={sound}
                                    >
                                        {videoListComponents}
                                    </Select>
                                </form>
                                <br />
                            </div>
                        </Grid>
                        <br />
                        <Button
                            variant="contained"
                            startIcon={<Clock />}
                            onClick={() => setTimerIsRunning(!isTimerRunning)}
                            disabled={
                                !isTimerRunning &&
                                minutesValue === 0 &&
                                secondsValue === 0
                            }
                            color={isTimerRunning ? "secondary" : "primary"}
                        >
                            {isTimerRunning ? "Stop!" : "Begin!"}
                        </Button>
                        <br />
                    </div>
                    <br />
                    <TimerLoadableSound
                        data={sound}
                        show={
                            isTimerRunning &&
                            secondsValue <= 3 &&
                            minutesValue === 0
                        }
                    />
                </Paper>
            </main>
        </>
    )
}
