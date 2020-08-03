import React from "react";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom"
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
                        <span className="tab" />
                        {props.bioP1}
                        <br />
                        <br />
                        <span className="tab" />
                        {props.bioP2}
                        <br />
                    </p>
                    <div className="row res_btn_section">
                        <button className="resume_btn">
                            <a
                                className="resume_atag"
                                href={process.env.PUBLIC_URL + "/assets/images/resume.pdf"}
                            >
                                View Resume
                        </a>
                        </button>
                        <button className="resume_btn">
                            <a
                                className="resume_atag"
                                href="/home"
                            >
                                Return to Home
                        </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BioSection;