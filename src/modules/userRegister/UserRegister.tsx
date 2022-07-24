import {InputField} from "../../components/inputField/InputField";
import React from "react";
import Logo from "../../images/logo.png";
import './UserRegister.scss'
import {Button} from "../../components/button/Button";

export const UserRegister = () => {
    return (
        <div>
            <header className={"user-register-header-section"}>
                <div className={"user-register-logo-section resize-user-register-logo"}>
                    <a href={"/"}><img src={Logo} alt={"user-register-logo"} className={"position-user-register-logo-name"}/>PeeSoft</a>
                </div>
            </header>
            <div className={"user-register-content"}>
                <InputField id={"email"} name={"Email"} type={"email"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" * Email"} required={true}/>
                <InputField id={"firstname"} name={"Firstname"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" Firstname"} required={false}/>
                <InputField id={"lastname"} name={"Lastname"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" Lastname"} required={false}/>
                <InputField id={"username"} name={"Username"} type={"username"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" * Username"} required={true}/>
                <InputField id={"password"} name={"Password"} type={"password"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" * Password"} required={true}/>
                <InputField id={"confirm-password"} name={"ConfirmPassword"} type={"password"} maxLength={30} onchange={() => console.log('change has happened to this input')} placeholder={" * ConfirmPassword"}required={true} />
            </div>
            <p className={"center-tip"}>* are required fields</p>
            <div className={"user-register-buttons-box"}>
                <Button className={"register-button-submit"} id={"register-button"} onClick={() => console.log('register btn clicked')} type={"submit"} buttonName={"Register"} active={false}/>
                <Button className={"register-button-back"} id={"register-button-back"} onClick={() => console.log('register btn clicked')} type={"submit"} buttonName={"Back"} active={false}/>
            </div>
        </div>
    )
}