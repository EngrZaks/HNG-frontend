import React from "react";
import Footer from "../footer/footer";
import "./contact.scss";
function Contact() {
  return (
    <div className="contact">
      <h1>contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <label>First name</label>
        <input placeholder="Enter your first name" />
        <label>Last name</label>
        <input placeholder="Enter your last name" />
        <label>Email</label>
        <input placeholder="yourname@email.com" />
        <label>Message</label>
        <textarea placeholder="Send me a message and I'll reply you as soon as possible..." />
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
