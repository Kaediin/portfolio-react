import React from "react";
import './contact.css'

function Contact() {

    var email, subject, message = "";

    function setEmail(event){
        email = event.target.value;
    }

    function setSubject(event){
        subject = event.target.value;
    }

    function setMessage(event){
        message = event.target.value;
    }

    function sendmail(event){
        event.preventDefault()
        window.open("mailto:"+email+"?subject="+subject+"&body="+message)
    }

    return (
        <section id="contact">
            <div id="container-content">
                <h1 className="header">Contact</h1>
                <p id="subtext">Have a question or something to say? Send me an email!</p>
                <div id="container-form">
                    <form onSubmit={sendmail}>
                        <input type="email" placeholder="Enter your email" onChange={setEmail} required/>
                        <input type="text" placeholder="Mail subject" onChange={setSubject} required/>
                        <textarea onChange={setMessage} placeholder="Your message" required/>
                        <input type="submit" value="Send mail"/>
                    </form>
                </div>
                <div id="container-socials">
                    <a target="_blank" href="https://github.com/Kaediin"><img className="social-image" src="/portfolio/icons/ic-github.png"/></a>
                    <a target="_blank" href="https://instagram.com/Kaediin"><img className="social-image" src="/portfolio/icons/ic-instagram.png"/></a>
                    <a target="_blank" href="https://nl.linkedin.com/in/kaedin-schouten-9383b619b"><img className="social-image" src="/portfolio/icons/ic-linkedin.png"/></a>
                </div>
            </div>
        </section>
    );
}

export default Contact
