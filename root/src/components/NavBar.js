import React from "react"
import { ReactComponent as GitHub } from "../icons/github.svg"
import { ReactComponent as Twitter } from "../icons/twitter.svg"
import { ReactComponent as Envelope } from "../icons/envelope.svg"
import { ReactComponent as GitLab } from "../icons/gitlab.svg"
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ThemeProvider,
    createMuiTheme,
} from "@material-ui/core"

const theme = createMuiTheme({
    type: "dark",
    primary: {
        main: "#fff",
    },
    typography: {
        fontFamily: "Open Sans,sans-serif",
    },
})

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}

export default NavBar
