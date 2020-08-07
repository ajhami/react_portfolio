import React from "react";
import "./style.css";

function TitleHeader(props) {
    return (
        <div className="row title_header_section">
            <h1 className="title_header">
                {props.title}
            </h1>
            <hr className="title_hr d-block d-md-none"/>
        </div>
    )
}

export default TitleHeader;