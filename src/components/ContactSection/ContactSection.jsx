import React from "react";
import "./style.css";
import SideImage from "../SideImage";

function ContactSection(props) {
    return (
        <div className="row">
            <SideImage
                divClasses="contact_pic_div col-md-4 d-none d-md-block"
                imageClasses="contact_photo"
                photo={props.photo}
            />
            <form action="" className="col-md-4">
                <label for="name">Your Name</label>
                <input type="text" name="name" className="u-full-width" placeholder="John Doe" id="name" />

                <label for="email">Your Email Address</label>
                <input type="email" name="email" className="u-full-width" placeholder="johndoe@example.com" id="email" />

                <label for="message">Your Message</label>
                <textarea className="u-full-width" placeholder="Hello Alex..." name="message" id="message" />

                <button type="submit" className="button-primary send_email_btn" value="Send">Send Message</button>
            </form>
        </div>
    )
}

export default ContactSection;