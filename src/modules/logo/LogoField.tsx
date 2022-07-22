import {ImageProps} from "../../props/ImageProps";
import "./LogoField.scss"

export const LogoField = (props: ImageProps) => {
    return (
        <div className={props.className}>
            <img src={props.src} onClick={props.onClick} alt={"Logo"}/>
            <label className={"position-logo-name"}>{props.label}</label>
        </div>
    )
}