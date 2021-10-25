import { React } from "react";
import { Link } from "react-router-dom";
import logoWeb from "../../assets/img/logo.svg";
import iconMenu from "../../assets/img/iconMenu-Mobile.svg";
import "../../general.css";

export const Header = () => {

    return (
        <header>
            <div className="header-links">
                <div className="header-links__logo">
                    <Link to="/"><img alt="Logo de Digital Booking" src={logoWeb}/></Link>
                </div>
                <div className="header-links__slogan">
                    <Link to="/"><p>Los mejores carros a tu disposición</p></Link>
                </div>
            </div>
            <img className="menu-icon" src={iconMenu} alt="Ícono menú"/>
            <div className="header-buttons">
                <Link to="/register" className="header-button__signup">Crear cuenta</Link>
                <Link to="/login">Iniciar sesión</Link>
            </div>
        </header>
    )

}

export default Header;