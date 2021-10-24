import React from "react";
import iconFacebook from "../../assets/img/iconFacebook.svg"
import iconLinkedin from "../../assets/img/iconLinkedin.svg"
import iconTwitter from "../../assets/img/iconTwitter.svg"
import iconInstagram from "../../assets/img/iconInstagram.svg"

class Footer extends React.Component{

    render(){

        return(
            <footer>
                <small className="copyright-text">©2021, Digital Booking</small>
                <div className="footer-icons">
                    <a href="#" className="footer-icons__padding-right"><img src={iconFacebook} alt="Ícono de Facebook" /></a>
                    <a href="#" className="footer-icons__padding-right"><img src={iconLinkedin} alt="Ícono de Linkedin" /></a>
                    <a href="#" className="footer-icons__padding-right"><img src={iconTwitter} alt="Ícono de Twitter" /></a>
                    <a href="#"><img src={iconInstagram} alt="Ícono de Instagram" /></a>
                </div>
            </footer>
        )

    }

}

export default Footer;