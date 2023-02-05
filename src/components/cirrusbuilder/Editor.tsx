import React from "react"
import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-yaml"
import "ace-builds/src-noconflict/theme-xcode"

export interface EditorProps {
    value: string
}

export default function Editor({ value }: EditorProps): JSX.Element {
    return (
        <AceEditor
            placeholder="Welcome to the YAML editor!"
            mode="yaml"
            theme="xcode"
            value={value}
            name={"YAML_EDITOR_" + String(Math.random() * 10)}
            editorProps={{ $blockScrolling: true }}
        />
    )
}
