import React from "react";
import "./style.css";
import contactPhoto from "./images/portrait_pic_contact.jpg"
import TitleHeader from "../../components/TitleHeader";
import ContactSection from "../../components/ContactSection";

function Contact() {
    return (
        <div>
            <TitleHeader title="Contact Me"/>
            <ContactSection photo={contactPhoto} />
        </div>
    )
};

export default Contact;