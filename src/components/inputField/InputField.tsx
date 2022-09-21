import React from "react";
import './InputField.scss'
import {InputProps} from "../../props/InputProps";
import {useForm} from "react-hook-form";

export const InputField = (props: InputProps) => {

     const {register} = useForm();
    //const register = props.register as FieldValues;
    // const isError = props.errors && props.errors[props.name as string];

    return (
        <div className={"input-field-container"}>
            <label>{props.placeholder}</label>
            <div className={"input-field-wrapper"}>
                <input className={"format-input-element"}
                       id={props.id}
                       placeholder={props.placeholder}
                       type="text"
                       {...register(props.name)}
                       onChange={props.onChange}
                       value={props.value}
                       maxLength={props.maxLength}
                       minLength={props.minLength}
                />
            </div>
        </div>
    )
}