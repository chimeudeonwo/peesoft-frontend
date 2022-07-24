import {InputField} from "../../components/inputField/InputField";
import React from "react";
import Logo from "../../images/logo.png";
import './UserRegister.scss'

export const UserRegister = () => {
    return (
        <div>
            <header className={"user-register-header-section"}>
                <div className={"user-register-logo-section resize-user-register-logo"}>
                    <a href={"/"}><img src={Logo} alt={"user-register-logo"} className={"position-user-register-logo-name"}/>PeeSoft</a>
                </div>
            </header>
            <div className={"user-register-content"}>
                <InputField id={"email"} name={"Email"} type={"email"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" Email"} />
                <InputField id={"firstname"} name={"Firstname"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" Firstname"} />
                <InputField id={"lastname"} name={"Lastname"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" Lastname"} />
                <InputField id={"username"} name={"Username"} type={"username"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" Username"} />
                <InputField id={"password"} name={"Password"} type={"password"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" Password"} />
                <InputField id={"confirm-password"} name={"ConfirmPassword"} type={"password"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" ConfirmPassword"} />
            </div>
        </div>
    )
}