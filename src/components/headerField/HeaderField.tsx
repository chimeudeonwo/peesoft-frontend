import React from "react";
import {ButtonProps} from "../../props/ButtonProps";
import './HeaderField.scss'

export const HeaderField = (props: ButtonProps) => {
    return (
        <div >
            <button className={"format-headerField-button"} id={props.id} name={props.name} onClick={props.onClick}>{props.buttonName}</button>
            {/*<button id={"aboutPage"} name={"About ByChip"} onClick={() => setCurrentPage('aboutPage')}>About ByChip</button>
            <button id={"contactPage"} name={"Contact ByChip"} onClick={() => setCurrentPage('contactPage')}> Contact ByChip</button>*/}
        </div>
    )
}