import {CheckBoxProps} from "../../props/checkBoxProps";

import './CheckBox.scss'
import React from "react";
export const CheckBox = (props: CheckBoxProps) => {
    return (
        <div className={"checkbox-container"}>
            <input className={"format-checkbox"}
                   id={props.id}
                   type={"checkbox"}
                   name={props.name} required={true}
                   value={props.value}
                   onChange={props.onChange}/>

            <label className={"align-label-to-box"}><b>{props.label}
                <a href={"/user-data-policy"} style={{color: "blueviolet"}}> user data policy</a>
            </b></label>
        </div>
    )
}