import React from "react";
import './InputField.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    id: string,
    name: string,
    onchange: any,
    placeholder: string,
    maxLength : number
}
export const InputField = (props: InputProps) => {
    return (
        <div className={"input-field-box"}>
            <span className={"position-input-name-left input-name-font-size"}>{props.name}</span>
            <input className={"format-input-element"} id={props.id} name={props.name} placeholder={props.placeholder}
                   onChange={props.onchange}/>
        </div>
    )
}