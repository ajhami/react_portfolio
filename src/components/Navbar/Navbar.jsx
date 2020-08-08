import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar row">
            <div className="col-md-6 nav_brand">
                <NavLink to="/" exact>
                    <img
                        className="ajh"
                        src={process.env.PUBLIC_URL + "/assets/images/logo/ajh_logo_192x192.png"}
                        alt="ajh_logo"
                    />
                </NavLink>
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
                <NavLink className="nav_selects" to="/contact">
                    Contact
                </NavLink>
                <div className="nav_splits">
                    |
                </div>
                <NavLink className="nav_selects" to="/projects">
                    Projects
                </NavLink>
                <div className="nav_splits">
                    |
                </div>
                <a className="nav_selects" href={process.env.PUBLIC_URL + "/assets/images/resume.pdf"}>
                    Resume
                </a>
                <div className="nav_splits">
                    |
                </div>
                <NavLink className="nav_selects" to="/home">
                    Home
                </NavLink>
            </div>
        </nav>
    )
};

export default Navbar;