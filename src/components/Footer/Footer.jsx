import React from "react";

class Footer extends React.Component{

    render(){

        return(
            <footer>
                <small className="copyright-text">©2021, Digital Rental Car</small>
                <div className="footer-icons">
                    <a href="#">
                        <i className="fab fa-facebook fab-icon"></i></a>
                    <a href="#">
                        <i className="fab fa-linkedin-in fab-icon"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter fab-icon"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </footer>
        )

    }

}

export default Footer;