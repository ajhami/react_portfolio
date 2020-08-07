import React from "react";
import "./style.css";


function Pillars() {
    return (
        <section className="row">
            <div
                id="about_pillar"
                className="col-md-4 home_pillars" 
                onClick={() => window.location.href="/react_portfolio/bio"}
            >
                <div id="about_box" className="inactive home_pillar_box"></div>
                <span className="topic_title"><strong>Read Bio</strong></span>
            </div>
            <div 
                id="projects_pillar" 
                className="col-md-4 home_pillars"
                onClick={() => window.location.href="/react_portfolio/portfolio"}
            >
                <div id="projects_box" className="inactive home_pillar_box"></div>
                <span className="topic_title"><strong>View Portfolio</strong></span>
            </div>
            <div 
                id="contact_pillar" 
                className="col-md-4 home_pillars"
                onClick={() => window.location.href="/react_portfolio/contact"}
            >
                <div id="contact_box" className="inactive home_pillar_box"></div>
                <span className="topic_title"><strong>Contact Me</strong></span>
            </div>
        </section>
    )
};

export default Pillars;