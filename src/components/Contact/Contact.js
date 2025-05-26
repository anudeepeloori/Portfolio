import React from "react";
import "../Contact/Contact.css";
import { IoIosCall } from "react-icons/io";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3e1c285a-f231-40fa-94e7-c87be803e575");

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
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Message failed to send. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title" data-aos="fade-up">
        <h1>Let’s Connect</h1>
        <p>Have something in mind? I'd love to hear from you.</p>
      </div>

      <div className="contact-section">
        <div className="contact-left" data-aos="fade-right">
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

        <form onSubmit={onSubmit} className="contact-right" aria-label="Contact form" data-aos="fade-left">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g. john@example.com"
              required
              autoComplete="email"
            />
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
