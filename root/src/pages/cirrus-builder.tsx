import React from "react"
import { AppBar, IconButton, Toolbar, Paper } from "@material-ui/core"
import Seo from "../components/Seo"
import MuiTheme from "../components/MuiTheme"
import TaskFactory from "../components/cirrusbuilder/TaskFactory"
import GitHubIcon from "@material-ui/icons/GitHub"

export default function App() {
    return (
        <MuiTheme>
            <Seo
                title="Cirrus CI Configuration Builder | RDIL's Site"
                page="/cirrus-builder"
            />
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <h3 style={{ flexGrow: 1 }}>
                        Cirrus CI Configuration Builder
                    </h3>
                    <a
                        href="https://github.com/rdilweb/rdil.rocks"
                        target="_blank"
                        style={{
                            color: "inherit",
                        }}
                        rel="noopener noreferrer"
                    >
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </a>
                </Toolbar>
            </AppBar>
            <Paper
                style={{
                    padding: "40px",
                    margin: "15px",
                    paddingBottom: "75px",
                }}
                elevation={4}
            >
                <TaskFactory />
            </Paper>
        </MuiTheme>
    )
}
