import React from "react";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom"
import "./style.css";
import SideImage from "../SideImage";


function BioSection(props) {
    return (
        <div className="row">
            <SideImage
                divClasses="bio_pic_div col-md-4"
                imageClasses="bio_photo"
                photo={props.photo}
            />
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
                            href="/react_portfolio/home"
                        >
                            Return to Home
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BioSection;