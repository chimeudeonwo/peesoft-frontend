import {ButtonProps} from "../../props/ButtonProps";
import './Button.scss'

export const Button = (props: ButtonProps) => {
    return (
        <div className={"button-component"}>
            <button className={props.className}
                    id={props.id}
                    name={props.name}
                    disabled={props.disabled}
                    style={{backgroundColor: props.active ? '#e3011a': '#b8bab8'}}
                    onClick={props.onClick} >
                <b>{props.buttonName}</b>
            </button>
        </div>
    )
}