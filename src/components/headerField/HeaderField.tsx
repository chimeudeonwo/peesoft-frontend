import React from "react";
import './HeaderField.scss'

interface HeaderFieldProps {
    id: string,
    name: string,
    buttonName: string,
    onClick: any,
}

export const HeaderField = (props: HeaderFieldProps) => {
    return (
        <div >
            <button className={"format-headerField-button"} id={props.id} name={props.name} onClick={props.onClick}>{props.buttonName}</button>
        </div>
    )
}