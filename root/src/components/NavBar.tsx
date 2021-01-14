import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import React from "react"
import Envelope from "./icons/Envelope"
import GitHub from "./icons/GitHub"
import GitLab from "./icons/GitLab"
import Twitter from "./icons/Twitter"
import MuiDarkTheme from "./MuiDarkTheme"

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
        <MuiDarkTheme>
            <div
                id="nav-btn"
                onClick={() => setIsOpen(!isOpen)}
                className={isOpen ? "open" : undefined}
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
                        <ListItem>
                            <ListItemIcon>
                                <GitHub className="sidebar-icon" />
                            </ListItemIcon>
                            <a
                                href="https://github.com/RDIL"
                                title="RDIL on GitHub"
                            >
                                <ListItemText primary="GitHub" />
                            </a>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Twitter className="sidebar-icon" />
                            </ListItemIcon>
                            <a
                                href="https://twitter.com/rdil_pickle"
                                title="rdil_pickle on Twitter"
                            >
                                <ListItemText primary="Twitter" />
                            </a>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Envelope className="sidebar-icon" />
                            </ListItemIcon>
                            <a href="mailto:me@rdil.rocks" title="Email me">
                                <ListItemText primary="Email" />
                            </a>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <GitLab className="sidebar-icon" />
                            </ListItemIcon>
                            <a
                                href="https://gitlab.com/rdil"
                                title="rdil on GitLab"
                            >
                                <ListItemText primary="GitLab" />
                            </a>
                        </ListItem>
                    </List>
                </nav>
            ) : null}
        </MuiDarkTheme>
    )
}

export default NavBar
