import React from "react";

export interface ImageProps extends React.HTMLProps<HTMLImageElement>{
    src: string,
    className?: string,
    onClick: any,
    label: string,
}