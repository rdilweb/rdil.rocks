import React from "react"
import Tooltip from "react-tooltip"

export default function SpecialMethod() {
    return (
        <React.Fragment>
            <Tooltip />
            <span className="badge badge--primary" data-tip="Special Method">
                SP
            </span>
        </React.Fragment>
    )
}
