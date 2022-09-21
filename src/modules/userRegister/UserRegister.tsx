import {InputField} from "../../components/inputField/InputField";
import React, {useState} from "react";
import Logo from "../../images/logo.png";
import './UserRegister.scss'
import {Button} from "../../components/button/Button";
import {useForm} from "react-hook-form";
import {CheckBox} from "../../components/checkbox/CheckBox";

export interface UserData {
    email: string
    username: string
    password: string
    confirmPassword: string
    userDataPolicy: boolean
}

export const UserRegister = () => {
    const {register, trigger, formState: { errors, isValid}} = useForm({mode: 'onBlur' });
    const [isUserDataChecked, setIsUserDataChecked] = useState(false);
    const [userRegisterData, setUserRegisterData] = useState({} as UserData);

    const onSubmit = async (evt:any) => {
        trigger().then(() => {});

        console.log(' userRegisterData: ' + JSON.stringify(userRegisterData) + ' sent to backend');
    };

    // Go to home page
    const goBackToHome = () => {
        // the protocol must be included in the url
        window.location.href = window.location.protocol + "//" + window.location.host + '/home';
    }

    // returns true if all required fields are not empty
    const isActive = () => {
        return isUserDataChecked && isValid;
    }

    const handleUserDataCheckBox = (evt: any) => {
        const target = evt.target;
        if(target.id !== 'user-data-policy') {
            return;
        }

        const isChecked = target.checked;
        setIsUserDataChecked(isChecked);

        const userData = {...userRegisterData}
        userData.userDataPolicy = isChecked;
        setUserRegisterData(userData);
    }

    const handleUserDataForm = (evt: any) => {
        console.log('handleUserDataForm called')

        const target = evt.target;
        const value = target.value;
        const userData = {...userRegisterData}

        if(target.id === 'email'){
            userData.email = value
        }

        if(target.id === 'password'){
            userData.password = value
        }

        if(target.id === 'confirmPassword'){
            userData.confirmPassword = value
        }

        setUserRegisterData(userData);
    }

    console.log('isUserDataChecked', isUserDataChecked);
    console.log('isValid', isValid);

    return (
        <div>
            <header className={"user-register-header-section"}>
                <div className={"user-register-logo-section resize-user-register-logo"}>
                    <a href={"/"}><img src={Logo} alt={"user-register-logo"} className={"position-user-register-logo-name"}/>PeeSoft</a>
                </div>
            </header>
            <div className={"user-register-container"}>
                <div>
                    <InputField register={register} value={userRegisterData.email} id={"email"} name={"Email"} type={"email"} maxLength={50} onChange={handleUserDataForm} placeholder={"Email*"} required={true}/>
                    <InputField register={register} id={"username"} name={"Username"} type={"username"} maxLength={50} onChange={handleUserDataForm} placeholder={"Username*"} required={true} value={userRegisterData.username}/>
                    <InputField register={register} id={"password"} name={"Password"} type={"password"} maxLength={50} onChange={handleUserDataForm} placeholder={"Password*"} required={true} value={userRegisterData.password}/>
                    <InputField register={register} id={"confirmPassword"} name={"ConfirmPassword"} type={"password"} maxLength={50} onChange={handleUserDataForm} placeholder={"ConfirmPassword*"}required={true} value={userRegisterData.confirmPassword} />
                    <CheckBox id={"user-data-policy"} name={"user-data-policy"} checked={isUserDataChecked} onChange={handleUserDataCheckBox}
                              label={"I have read and agreed to the user data protection of PeeSoft"} />
                    <p style={{color: "red"}}>* are required fields.</p>
                </div>
                <div className={"user-register-buttons-box"}>
                    <Button id={"register-button-back"} onClick={goBackToHome} buttonName={"Back"} active={false}/>
                    <Button className={"register-button-submit"} id={"register-button"} onClick={onSubmit} type={"submit"} buttonName={"Register"} disabled={isActive()} active={isActive()}/>
                </div>
            </div>

        </div>
    )
}