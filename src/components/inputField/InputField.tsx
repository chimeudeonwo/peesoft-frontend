import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    id: string,
    name: string,
    onchange: any,
    placeholder: string,
}
export const InputField = (props: InputProps) => {
    return (
        <div>
            <input id={props.id} name={props.name} placeholder={props.placeholder} onChange={props.onchange}/>
        </div>
    )
}