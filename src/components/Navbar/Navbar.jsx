import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar row">
            <div className="col-md-6 nav_brand">
                <img
                    className="ajh"
                    src={process.env.PUBLIC_URL + "/assets/images/logo/ajh_logo_192x192.png"}
                    alt="ajh_logo"
                    onClick={() => window.location.href="/react_portfolio"}
                />
                <h2 className="nav_name">
                    <strong>
                        Alexander James Hamilton
                    </strong>
                </h2>
                <p className="nav_desc">
                    Web Developer
                </p>
            </div>
            <div className="col-md-6">
                <a className="nav_selects" href="/react_portfolio/contact">
                    Contact
                </a>
                <div className="nav_splits">
                    |
                </div>
                <a className="nav_selects" href="/react_portfolio/portfolio">
                    Projects
                </a>
                <div className="nav_splits">
                    |
                </div>
                <a className="nav_selects" href={process.env.PUBLIC_URL + "/assets/images/resume.pdf"}>
                    Resume
                </a>
                <div className="nav_splits">
                    |
                </div>
                <a className="nav_selects" href="/react_portfolio/home">
                    Home
                </a>
            </div>
        </nav>
    )
};

export default Navbar;