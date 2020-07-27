import React from "react";
import "./style.css";
import BioSection from "./../../components/BioSection";
import bioPhoto from "./images/bio_photo.jpg"

function Bio() {
    return (
        <BioSection 
            photo={bioPhoto}
            bioP1="I was born and raised in Sacramento, California and ventured to Utah for a college education at BYU. I have a Bachelor's of Statistics and am currently studying Full-Stack Web Development at the University of Utah."
            bioP2="I was born and raised in Sacramento, California and ventured to Utah for a college education at BYU. I have a Bachelor's of Statistics and am currently studying Full-Stack Web Development at the University of Utah."
        />
    )
};

export default Bio;