import React from "react"
import NavBar from "../components/NavBar"

export default function ServiceDown() {
    return (
        <>
            <NavBar />
            <main>
                <h1>Service Down</h1>
                <p>
                    This service is currently undergoing maintenance! Sorry
                    about that. Please check back later.
                </p>
            </main>
        </>
    )
}
