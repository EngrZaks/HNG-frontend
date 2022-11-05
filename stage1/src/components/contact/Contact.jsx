import React from "react";
import Footer from "../footer/footer";
import "./contact.scss";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <form>
          <h1>contact Me</h1>
          <p className="contact-text">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
          <div className="name">
            <div className="first">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="last">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="yourname@email.com"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            rows={7}
          />
          <div className="check">
            <label>
              You agree to providing your data to DevZaks who may contact you.
            </label>
            <input
              type="checkbox"
              // value=""
              defaultChecked
              id="aggree"
              name="agree"
            />
          </div>
          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
