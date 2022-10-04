import React, {useState} from "react";
import './InputField.scss'
import {InputProps} from "../../props/InputProps";
import {useForm} from "react-hook-form";

export const InputField = (props: InputProps) => {
    const [touched, setTouched] = useState(false);
     const {register} = useForm();
    //const register = props.register as FieldValues;
    // const isError = props.errors && props.errors[props.name as string];

    const markTouched = () => {
        setTouched(true)
    }

    return (
        <div className={"input-field-container"}>
            <label>{props.placeholder}</label>
            <div className={"input-field-wrapper"}>
                <input className={"format-input-element"}
                       id={props.id}
                       placeholder={props.placeholder}
                       type={props.type}
                       disabled={props.disabled}
                       {...register(props.name, {
                           required: props.required,
                           pattern: props.pattern,
                           min: props.min,
                           max: props.max,
                           onChange: (e: any) => {
                               props.onChange(e);
                           },
                           onBlur: () => {
                               markTouched()
                           }
                       })}
                       defaultValue={props.defaultValue}
                       maxLength={props.maxLength}
                       minLength={props.minLength}
                       autoFocus={props.autoFocus}
                />
                {
                    touched && <span style={{color: "red"}}>{props.required as string}</span>
                }
            </div>
        </div>
    )
}