import React from "react"
import Navbar from "../components/NavBar"
import Seo from "../components/Seo"
import Link from "next/link"

function Tools() {
    return (
        <>
            <Navbar />
            <Seo title="Tools | RDIL's Site" page="/tools" />
            <main>
                <h1>Tools</h1>
                <ul>
                    <li>
                        <Link href="hot-pocket-calculator">
                            Hot Pocket Calculator
                        </Link>
                    </li>
                    <li>
                        <Link href="timer">Timer</Link>
                    </li>
                </ul>
            </main>
        </>
    )
}

export default Tools
