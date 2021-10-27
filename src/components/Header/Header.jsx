import { React, useState } from "react";
import { Link } from "react-router-dom";
import logoWeb from "../../assets/img/logo.svg";
import iconMenu from "../../assets/img/iconMenu-Mobile.svg";
import "../../general.css";
import "./Header.css";

export const Header = () => {

    /* window.addEventListener('scroll', function() {
        let header = document.querySelector('header');
        header.classList.toggle('header-down', window.scrollY > 0);
    }) */

    const [navBarOpen, setNavBarOpen] = useState(false);

    const handleToggle = () => {
        setNavBarOpen(!navBarOpen);
        console.log(navBarOpen);
    }

    const closeMenu = () => {
        setNavBarOpen(false);
    }

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
            <img className="menu-icon" src={iconMenu} alt="Ícono menú" onClick={handleToggle}/>
            <nav className="nav-bar">
                <ul className={`menu-nav ${navBarOpen ? " show-menu" : ""}`}>
                    <div className="menu-nav-box">
                        <p>Menú</p>
                    </div>
                    <li>
                        <Link to="/register" className="menu-nav-link register" onClick={closeMenu}>Crear cuenta</Link> 
                    </li>
                    <li>
                        <Link to="/login" className="menu-nav-link login" onClick={closeMenu}>Iniciar sesión</Link> 
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="header-buttons">
                    <li>
                        <Link to="/register" className="header-button__signup">Crear cuenta</Link> 
                    </li>
                    <li>
                        <Link to="/login" className="header-button__login">Iniciar sesión</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    )

}