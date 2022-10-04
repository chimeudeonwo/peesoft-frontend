import React, {useState} from "react";
import './InputField.scss'
import {InputProps} from "../../props/InputProps";
import {FieldValues, useForm, UseFormRegister} from "react-hook-form";

export const InputField = (props: InputProps) => {
    const [touched, setTouched] = useState(false);
    // const {register} = useForm();
    const register = props.register as UseFormRegister<FieldValues>;
    const error = props.errors && props.errors[props.name as string];
    // const isRequired = error.type === "required" ? "" : "";

    const markTouched = () => {
        setTouched(true)
    }

    return (
        <div className={"input-field-container"}>
            <label>{props.placeholder}</label>
            <div className={"input-field-wrapper"}>
                <input className={"format-input"}
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
                    (error || touched) && <span style={{color: "red"}}>{props.required as string}</span>
                }
            </div>
        </div>
    )
}