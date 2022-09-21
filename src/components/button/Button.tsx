import {ButtonProps} from "../../props/ButtonProps";
import './Button.scss'

export const Button = (props: ButtonProps) => {
    return (
        <div className={"button-component"}>
            <button className={props.className}
                    id={props.id}
                    name={props.name}
                    disabled={!props.active}
                    style={{backgroundColor: props.active ? '#fc0202': '#b8bab8'}}
                    onClick={props.onClick} >
                <b>{props.buttonName}</b>
            </button>
        </div>
    )
}