import React from "react"
import MuiTheme from "./MuiTheme"
import GitHub from "../icons/GitHub"
import Twitter from "../icons/Twitter"
import Envelope from "../icons/Envelope"
import GitLab from "../icons/GitLab"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <MuiTheme>
            <div
                id="nav-btn"
                onClick={() => setIsOpen(!isOpen)}
                className={isOpen ? "open" : undefined}
                role="button"
                onKeyPress={() => setIsOpen(!isOpen)}
                tabIndex={0}
            >
                <span></span>
                <span></span>
                <span></span>
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
                            <a
                                href="https://github.com/RDIL"
                                alt="RDIL on GitHub"
                            >
                                <ListItemText primary="GitHub"></ListItemText>
                            </a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Twitter className="sidebar-icon" />
                            </ListItemIcon>
                            <a
                                href="https://twitter.com/rdil_pickle"
                                alt="rdil_pickle on Twitter"
                            >
                                <ListItemText primary="Twitter"></ListItemText>
                            </a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Envelope className="sidebar-icon" />
                            </ListItemIcon>
                            <a href="mailto:me@rdil.rocks" alt="Email me">
                                <ListItemText primary="Email"></ListItemText>
                            </a>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <GitLab className="sidebar-icon" />
                            </ListItemIcon>
                            <a
                                href="https://gitlab.com/rdil"
                                alt="rdil on GitLab"
                            >
                                <ListItemText primary="GitLab"></ListItemText>
                            </a>
                        </ListItem>
                    </List>
                </nav>
            ) : null}
        </MuiTheme>
    )
}

export default NavBar
