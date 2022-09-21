import {CheckBoxProps} from "../../props/checkBoxProps";

import './CheckBox.scss'
export const CheckBox = (props: CheckBoxProps) => {
    return (
        <div className={"checkbox-container"}>
            <input className={"format-checkbox"}
                   id={props.id}
                   type={"checkbox"}
                   name={props.name} required={true}
                   value={props.value}
                   onChange={props.onChange}/>

            <label className={"align-label-to-box"}><b><a href={"/user-data-policy"}>{props.label}</a></b></label>
        </div>
    )
}