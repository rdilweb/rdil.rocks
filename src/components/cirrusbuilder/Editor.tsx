import React from "react"
import { TextField } from "@mui/material"

export interface EditorProps {
    value: string
}

export default function Editor({ value }: EditorProps): JSX.Element {
    return (
        <>
            <TextField
                id="outlined-multiline-static"
                label="Generated Configuration"
                multiline
                value={value}
                style={{ width: "100%" }}
            />
        </>
    )
}
