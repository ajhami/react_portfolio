import React from "react";
import "./style.css";
import BioSection from "../../components/BioSection";
import bioPhoto from "./images/bio_photo.jpg"
import TitleHeader from "../../components/TitleHeader";

function Bio() {
    return (
        <div>
            <TitleHeader title="About Me"/>
            <BioSection 
                photo={bioPhoto}
                bioP1="I am a native of Sacramento, California and currently reside in Utah Valley. This year, I recieved both a Bachelor's of Statistics from Brigham Young University and Certification as a Full-Stack Web Developer from the University of Utah."
                bioP2="I've always had a knack for mathematics and love for technology. I enjoy learning new skills and developing creative solutions. In my spare time, I like to play musical instruments and enjoy water sports, including wakesurfing and scubadiving."
            />
        </div>
    )
};

export default Bio;