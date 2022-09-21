import React from "react";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    id: string,
    name: string,
    onChange: any,
    register?: UseFormRegister<FieldValues>
    require?: boolean | string,
    placeholder?: string,
    maxLength? : number,
    label?: string,
    errors?: FieldErrors,
}