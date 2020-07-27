import React from "react";
import "./style.css";

function BioSection(props) {
    return (
        <section className="bio_card">
            <div className="row">
                <div className="col-md-4">
                    <img className="bio_photo" src={props.photo} alt="bio_photo" />
                </div>
                <div className="col-md-8">
                    <p className="bio_text">
                        <span classNane="tab" />
                        {props.bioP1}
                        <br/>
                        <br/>
                        <span className="tab" />
                        {props.bioP2}
                        <br/>
                        <button className="resume_btn"><a href={process.env.PUBLIC_URL + "/assets/images/resume.pdf"}>View Resume</a></button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BioSection;