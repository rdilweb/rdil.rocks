import React from "react"
import GitHub from "./icons/Github"
import Twitter from "./icons/Twitter"
import Envelope from "./icons/Envelope"
import GitLab from "./icons/Gitlab"
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
                                alt="RDIL on GitHub"
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
                                alt="rdil_pickle on Twitter"
                            >
                                <ListItemText primary="Twitter" />
                            </a>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Envelope className="sidebar-icon" />
                            </ListItemIcon>
                            <a href="mailto:me@rdil.rocks" alt="Email me">
                                <ListItemText primary="Email" />
                            </a>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <GitLab className="sidebar-icon" />
                            </ListItemIcon>
                            <a
                                href="https://gitlab.com/rdil"
                                alt="rdil on GitLab"
                            >
                                <ListItemText primary="GitLab" />
                            </a>
                        </ListItem>
                    </List>
                </nav>
            ) : null}
        </ThemeProvider>
    )
}

export default NavBar
