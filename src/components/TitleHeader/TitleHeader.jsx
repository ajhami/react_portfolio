import React from "react";
import "./style.css";

function TitleHeader(props) {
    return (
        <div className="row">
            <h1 className="title_header">
                {props.title}
            </h1>
        </div>
    )
}

export default TitleHeader;