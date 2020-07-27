import React from "react";
import "./style.css";

function Footer() {
    return (
        <div>
            <hr className="footer_hr" />
                <section className="row footer_row">
                    <div className="social_media_buttons">
                        <a href="https://www.facebook.com/alex.hamilton.1044">
                            <i className="fa fa_footer fa-facebook" />
                        </a>
                        <a href="https://www.instagram.com/alxhami/"> 
                            <i className="fa fa_footer fa-instagram"/>
                        </a>
                        <a href="https://github.com/ajhami">
                            <i className="fa fa_footer fa-github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/alexjhamilton/">
                            <i className="fa fa_footer fa-linkedin"/>
                        </a>
                    </div>
                </section>
        </div>
    )
}

export default Footer;