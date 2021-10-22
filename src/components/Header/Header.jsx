import React from "react";
import "../../general.css";

class Header extends React.Component {

    render(){

        return (
            <header>
                <div className="header-links">
                    <div className="header-links__logo">
                        <a href="./index.html" title="Link a la página principal"><img alt="Logo de Digital Rental Car" src="#"/></a>
                    </div>
                    <div className="header-links__slogan">
                        <a href="./index.html" title="Link a la página principal"><p>Los mejores carros a tu disposición</p></a> 
                    </div>
                </div>
                <i className="fas fa-bars"></i>
                <div className="header-input">
                    <input type="submit" value="Crear cuenta" className="header-input__signup"/>
                    <input type="submit" value="Iniciar sesión"/>
                </div>
            </header>
        )

    }

}

export default Header;