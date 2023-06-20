import React from "react"
import Navbar from "../components/NavBar"
import Seo from "../components/Seo"

/*
 * Taken from https://www.techrepublic.com/article/convert-the-local-time-to-another-time-zone-with-this-javascript/ for this.
 */
function calcTime(offset: number): string {
    const d = new Date()

    const utc = d.getTime() + d.getTimezoneOffset() * 60_000

    const nd = new Date(utc + 3_600_000 * offset)

    return nd.toLocaleString()
}

export default function Time() {
    const [isClientSideRenderer, setIsClientSideRenderer] =
        React.useState(false)
    const [, setTime] = React.useState(0)

    const i = setInterval(() => setTime(Date.now()), 1000)

    React.useEffect(() => {
        setIsClientSideRenderer(true)

        return () => {
            clearInterval(i)
        }
    })

    const UTC_OFFSET = -5

    const time = calcTime(UTC_OFFSET)

    return (
        <>
            <Navbar />
            <Seo title="Time | RDIL's Site" page="/time" />
            <main>
                <h1>Time</h1>

                {isClientSideRenderer ? (
                    <p>
                        It is currently {time} for RDIL, who lives in UTC-5 (
                        <code>America/New_York</code>).
                    </p>
                ) : (
                    <p>Looks like the page hasn't rendered yet.</p>
                )}
            </main>
        </>
    )
}
