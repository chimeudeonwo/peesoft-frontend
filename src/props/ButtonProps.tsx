import React from "react";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    id?: string,
    name?: string,
    buttonName?: string,
    onClick?: any,
    active?: boolean
}