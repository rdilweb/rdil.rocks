import NavBar from "../components/NavBar"
import Seo from "../components/Seo"
import fs from "fs"
import { GetStaticPropsResult } from "next"
import Link from "next/link"
import React from "react"

interface JavadocsProps {
    projects: Record<string, string[]>
}

export default function Javadocs({ projects }: JavadocsProps) {
    return (
        <>
            <NavBar />
            <Seo title="Javadocs | RDIL's Site"
                 page={"javadocs"}
                 description={"An index of all my projects' hosted Javadocs."} />

            <main>
                <h1>Javadocs</h1>

                {Object.keys(projects).map((project) => (
                    <details key={project} open={true}>
                        <summary>{project}</summary>

                        <ul>
                            {projects[project].map((version) => (
                                <li key={version}>
                                    <Link
                                        href={`/docs/javadocs/${project.replaceAll(
                                            ".",
                                            "/"
                                        )}/${version}/index.html`}
                                    >
                                        {version}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </details>
                ))}
            </main>
        </>
    )
}

export function getStaticProps(): GetStaticPropsResult<JavadocsProps> {
    const projects = ["rocks.rdil.simpleconfig"]

    const out: JavadocsProps["projects"] = {}

    for (const project of projects) {
        const pkgFolder = project.replaceAll(".", "/")

        out[project] = fs.readdirSync(`public/docs/javadocs/${pkgFolder}`)
    }

    return {
        props: {
            projects: out
        }
    }
}
