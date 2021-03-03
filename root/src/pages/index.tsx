import React from "react"
import Link from "next/link"
import { Card, Grid } from "@material-ui/core"
import NavBar from "../components/NavBar"
import Seo from "../components/Seo"

export default function Home() {
    return (
        <>
            <Seo title="Home | RDIL's Site" page="" />
            <NavBar />
            <main>
                <div>
                    <h1>Reece Dunham</h1>
                    <p>
                        Heya, I'm a coder, designer of websites, and open-source
                        lover.
                    </p>
                </div>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Card className="card">
                            <h3>About Me</h3>
                            <p>
                                I am a software developer and I maintain many
                                open source projects on GitHub. I have been
                                coding since 2014, and can say I have knowledge
                                in most of the common programming languages such
                                as Python and JavaScript to name a few.
                            </p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className="card">
                            <h3>Experience</h3>
                            <p>
                                I have taken a large amount of classes on Python
                                (my main language) and web design, plus some on
                                other languages such as Java, React, and the
                                basics of Docker. I run several OSS projects
                                that have helped me to learn how to apply code
                                to the real world.
                            </p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card className="card">
                            <h3>Hobbies</h3>
                            <p>
                                When I'm not working on software, I am most
                                likely walking my dog, enjoying tennis, taking a
                                hike in the local woods, playing a video game or
                                two, listening to Spotify, or watching Netflix.
                                Or sleeping - that's great for gaining energy to
                                code more.
                            </p>
                        </Card>
                    </Grid>
                </Grid>

                <div>
                    <h2>Get in touch</h2>
                    <p>
                        Want to have a chat? My contact info is on the sidebar.
                        I'm looking forward to meeting you!
                    </p>

                    <h2>Things I've made</h2>
                    <ul>
                        <li>
                            <a href="https://area4.readthedocs.io/en/stable">
                                area4
                            </a>
                        </li>
                        <li>
                            <a href="https://privacy.rdil.rocks">
                                My Privacy Journal
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/rdilweb">
                                A few web libraries
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.rdil.rocks">
                                A lot of other things, some are documented here
                            </a>
                        </li>
                    </ul>

                    <h2>Open-source projects I've worked on</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/PowerShell/PowerShell">
                                PowerShell Core
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/PowerShell/PowerShell-Docker">
                                PowerShell Docker Images (I'm an official
                                curator!)
                            </a>
                        </li>
                        <li>
                            <a href="https://cirruslabs.org">Cirrus CI</a>
                        </li>
                        <li>
                            <a href="https://zlanguage.github.io">
                                The Z programming language
                            </a>
                        </li>
                        <li>
                            <a href="https://opensourcedesign.net">
                                Open Source Design
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>More about me</h2>
                    <ul>
                        <li>
                            <Link href="/code-style">My code style</Link>
                        </li>
                        <li>
                            <Link href="/blog">My blog</Link>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}
