import React from "react"
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
} from "@mui/material"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { Script } from "./classes"

interface ScriptConfigProps {
    script: Script
}

const ScriptConfig = (props: ScriptConfigProps) => {
    const [expanded, setExpanded] = React.useState(false)
    const handleChange = () => setExpanded(!expanded)
    const [, setForce] = React.useState(0)

    function rerender() {
        setForce(Math.random() * Math.random())
    }

    return (
        <Accordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`script-${props.script.getName()}-header`}
                id={`script-${props.script.getName()}-header`}
            >
                <p className="accordion-heading">
                    {props.script.getName() !== ""
                        ? props.script.getName()
                        : "Unnamed"}{" "}
                    Script
                </p>
            </AccordionSummary>
            <AccordionDetails>
                <TextField
                    className="space"
                    label="Script Name"
                    variant="outlined"
                    value={props.script.getName()}
                    onChange={(event) => {
                        props.script.setName(event.target.value)
                        rerender()
                    }}
                    required={true}
                />
                <TextField
                    className="space"
                    label="Command"
                    variant="outlined"
                    value={props.script.getRun()}
                    onChange={(event) => {
                        props.script.setRun(event.target.value)
                        rerender()
                    }}
                    required={true}
                />
            </AccordionDetails>
        </Accordion>
    )
}

export default ScriptConfig
