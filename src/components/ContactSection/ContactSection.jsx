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
            <form action="" className="col-md-8">
                <div className="container emailing_card">
                    <div className="row">
                        <div className="col-lg-4">
                            <label className="row emailing_form_label raise_the_roof" for="name">Your Name</label>
                            <input type="text" name="name" className="row emailing_input" placeholder="John Doe" id="name" />
                        </div>
                        <div className="col-lg-4">
                            <label className="row emailing_form_label raise_the_roof" for="email">Your Email Address</label>
                            <input type="email" name="email" className="row emailing_input" placeholder="johndoe@example.com" id="email" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <label className="row emailing_form_label raise_the_roof" for="message">Your Message</label>
                            <textarea className="row emailing_textarea" placeholder="Hello Alex..." name="message" id="message" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <button type="submit" className="button-primary send_email_btn raise_the_roof" value="Send">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactSection;