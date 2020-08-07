import React from "react";
import "./style.css";

function SideImage(props) {
    return (
        <div className={props.divClasses}>
            <img className={props.imageClasses} src={props.photo} alt="bio_photo" />
        </div>
    )
}

export default SideImage;