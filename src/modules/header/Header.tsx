import {HeaderField} from "../../components/headerField/HeaderField";
import React from "react";

interface HeaderProps {
    onClick: any
}

export const Header = (props: HeaderProps) => {

    return (
        <header className={"header-section"}>
            <div className={"align-header-menu"}>
                <HeaderField id={"servicePage"} name={"servicePage"} buttonName={"Our Services"} onClick={props.onClick} active={true}/>
                <HeaderField id={"aboutPage"} name={"aboutPage"} buttonName={"About Us"} onClick={props.onClick} active={true}/>
                <HeaderField id={"careerPage"} name={"careerPage"} buttonName={"Career"} onClick={props.onClick} active={true}/>
                <HeaderField id={"contactPage"} name={"contactPage"} buttonName={"Contact Us"} onClick={props.onClick} active={true}/>
            </div>
        </header>
    )
}