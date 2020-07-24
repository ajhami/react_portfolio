import React from "react";
import "./style.css";

function Pillars() {
    return (
        <section className="row">
            <div id="about_pillar" className="col-md-4 home_pillars">
                <div id="about_box" className="inactive home_pillar_box"></div>
            </div>
            <div id="projects_pillar" className="col-md-4 home_pillars">
                <div id="projects_box" className="inactive home_pillar_box"></div>
            </div>
            <div id="contact_pillar" className="col-md-4 home_pillars">
                <div id="contact_box" className="inactive home_pillar_box"></div>
            </div>
        </section>
    )
};

export default Pillars;