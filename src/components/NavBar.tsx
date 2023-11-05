import React from "react"
import GitHub from "../icons/GitHub"
import Envelope from "../icons/Envelope"
import GitLab from "../icons/GitLab"
import clsx from "clsx"

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={clsx("nav-btn", isOpen ? "open" : undefined)}
                role="button"
                onKeyPress={() => setIsOpen(!isOpen)}
                tabIndex={0}
            >
                <span />
                <span />
                <span />
            </div>
            {isOpen ? (
                <nav
                    aria-label="site"
                    className={"sidebar-nav"}
                >
                    <div>
                        <GitHub className="sidebar-icon" />
                        <a href="https://github.com/RDIL">
                            <p>GitHub</p>
                        </a>
                    </div>
                    <div>
                        <Envelope className="sidebar-icon" />
                        <a href="mailto:me@rdil.rocks">
                            <p>Email</p>
                        </a>
                    </div>
                    <div>
                        <GitLab className="sidebar-icon" />
                        <a href="https://gitlab.com/rdil">
                            <p>GitLab</p>
                        </a>
                    </div>
                </nav>
            ) : null}
        </>
    )
}
