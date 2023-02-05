import React from "react"
import GitHub from "../icons/GitHub"
import Twitter from "../icons/Twitter"
import Envelope from "../icons/Envelope"
import GitLab from "../icons/GitLab"
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
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
                    className="sidebar-nav"
                    style={{ width: isOpen ? "265px" : "0" }}
                >
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <GitHub className="sidebar-icon" />
                            </ListItemIcon>
                            <a href="https://github.com/RDIL">
                                <ListItemText primary="GitHub" />
                            </a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Twitter className="sidebar-icon" />
                            </ListItemIcon>
                            <a href="https://twitter.com/rdil_pickle">
                                <ListItemText primary="Twitter" />
                            </a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Envelope className="sidebar-icon" />
                            </ListItemIcon>
                            <a href="mailto:me@rdil.rocks">
                                <ListItemText primary="Email" />
                            </a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <GitLab className="sidebar-icon" />
                            </ListItemIcon>
                            <a href="https://gitlab.com/rdil">
                                <ListItemText primary="GitLab" />
                            </a>
                        </ListItem>
                    </List>
                </nav>
            ) : null}
        </>
    )
}
