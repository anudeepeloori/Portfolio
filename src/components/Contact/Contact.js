import React from "react";
import "../Contact/Contact.css";
import { IoIosCall } from "react-icons/io";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d80fe8eb-1e5c-407c-858e-4fa8da9557b6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h1>Let’s Connect</h1>
        <p>Have a question, project idea, or just want to say hello? I'm all ears.</p>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h2>Contact Info</h2>
          <ul className="contact-details">
            <li className="contact-detail">
              <IoIosCall aria-label="Phone" />
              <span>+1 732-666-8333</span>
            </li>
            <li className="contact-detail">
              <MdMailOutline aria-label="Email" />
              <span>anudeepeloori@gmail.com</span>
            </li>
            <li className="contact-detail">
              <MdOutlineLocationOn aria-label="Location" />
              <span>Florida, USA</span>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="contact-right" aria-label="Contact form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" name="name" placeholder="e.g. John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" placeholder="e.g. john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your idea or question..."
              required
            />
          </div>
          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
