import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";


function Pillars() {
    return (
        <section className="row">
            <div
                id="about_pillar"
                className="col-md-4 home_pillars"
            >
                <NavLink to="/bio" exact>
                    <div id="about_box" className="inactive home_pillar_box"></div>
                    <span className="topic_title"><strong>Read Bio</strong></span>
                </NavLink>
            </div>
            <div
                id="projects_pillar"
                className="col-md-4 home_pillars"
            >
                <NavLink to="/projects" exact>
                    <div id="projects_box" className="inactive home_pillar_box"></div>
                    <span className="topic_title"><strong>View Portfolio</strong></span>
                </NavLink>
            </div>
            <div
                id="contact_pillar"
                className="col-md-4 home_pillars"
            >
                <NavLink to="/contact" exact>
                    <div id="contact_box" className="inactive home_pillar_box"></div>
                    <span className="topic_title"><strong>Contact Me</strong></span>
                </NavLink>
            </div>
        </section>
    )
};

export default Pillars;