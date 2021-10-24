import React from "react";
import "../../general.css";
import logoWeb from "../../assets/img/logo.svg";
import iconMenu from "../../assets/img/iconMenu-Mobile.svg";

class Header extends React.Component {

    render(){

        return (
            <header>
                <div className="header-links">
                    <div className="header-links__logo">
                        <a href="./index.html" title="Link a la página principal"><img alt="Logo de Digital Booking" src={logoWeb}/></a>
                    </div>
                    <div className="header-links__slogan">
                        <a href="./index.html" title="Link a la página principal"><p>Los mejores carros a tu disposición</p></a> 
                    </div>
                </div>
                <img className="menu-icon" src={iconMenu} alt="Ícono menú"/>
                <div className="header-input">
                    <input type="submit" value="Crear cuenta" className="header-input__signup"/>
                    <input type="submit" value="Iniciar sesión"/>
                </div>
            </header>
        )

    }

}

export default Header;