import React from "react";
import {FieldErrors, FieldValues, Message, UseFormRegister, ValidationRule} from "react-hook-form";

export interface InputProps {
    id: string,
    name: string,
    defaultValue: string,
    type?: string,
    autoFocus?: boolean,
    disabled?: boolean,
    onChange: any,
    register?: UseFormRegister<FieldValues>
    required?: Message | ValidationRule<boolean>,
    pattern?: ValidationRule<RegExp>,
    placeholder?: string,
    minLength? : number,
    maxLength? : number,
    min?: ValidationRule<number | string>,
    max?: ValidationRule<number | string>,
    label?: string,
    errors?: FieldErrors,
}