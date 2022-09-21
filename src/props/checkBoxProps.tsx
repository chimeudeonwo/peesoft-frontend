import React from "react";

export interface CheckBoxProps extends React.HTMLProps<HTMLInputElement> {
    id: string,
    name: string,
    onClick?: any,
    checked: boolean
    label: string
    onChange: any
}