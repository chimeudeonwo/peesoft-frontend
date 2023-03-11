import React from "react";
import {LogoField} from "../logo/LogoField";
import Logo from "../../images/logo.png";
import './Header.scss'
import {SearchBar} from "../searchBar/SearchBar";

interface HeaderProps {
    onClick: any
}

export const Header = (props: HeaderProps) => {

    return (
        <header className={"header-container"}>
            <div className={"logo-section"}>
                <LogoField src={Logo} />
            </div>

            <div className={"search-bar"}>
                <SearchBar />
                <div className={"test"}>
                    <p>most viewed</p>
                    <p>start making money</p>

                    <p>most viewed</p>
                    <p>start making money</p>

                    <p>most viewed</p>
                    <p>start making money</p>
                </div>
            </div>

            <div className={"language-change"}>
                <select>
                    <option>English</option>
                    <option>German</option>
                </select>
            </div>

            <div>
                <select placeholder={"Menu"}>
                    <option>Our Services</option>
                    <option>About us</option>
                    <option>Career</option>
                    <option>Contact us</option>
                </select>
            </div>

            <div>
                <p>Login</p>
                <p>Register</p>
            </div>
        </header>
    )
}