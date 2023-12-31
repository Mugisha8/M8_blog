import React from "react";
import CoverImage from "./components/CoverImage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Contact = () => {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="contact_content">
        <div className="contact_cover">
          <iframe
            className="location_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31899.962567131184!2d30.0435194541414!3d-1.9552698237260555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42991d5abed%3A0xcad912f40dd45dc5!2sKiyovu%2C%20Kigali!5e0!3m2!1sen!2srw!4v1699451210068!5m2!1sen!2srw"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h2>Get in Touch</h2>
        <p>
          We welcome the opportunity to connect with you. Your thoughts,
          questions, and suggestions matter to us. If you have any inquiries,
          feedback, or simply want to reach out, our team is here to assist.
          Your input is a vital part of our journey, helping us continually
          enhance your experience. We make it a priority to respond promptly to
          all messages we receive. You can reach us by using the contact form
          provided below or by sending an email to <b>m8engineblogs@gmail</b>.
          We look forward to engaging with you and making your experience on our
          blog platform as enjoyable as possible.
        </p>

        <div class="contact_grid">
          <div class="contact_wrapper">
            <h3>Where To find Us</h3>
            <p>
              <li> KN 6483 AV Kiyovu</li>
              <li> Near Ubumwe Hotel</li>
              <li> Nyarugenge Kigali city</li>
              <li> Republic Of Rwanda</li>
            </p>
          </div>

          <div class="contact_wrapper">
            <h3>Contact Info</h3>
            <p>
              <li>7800438583</li>
              <li>7485399204</li>
              <li>m8tech@info.rw</li>
              <li> M8aiengine.com</li>
            </p>
          </div>
          <div class="contact_wrapper">
            <h3>FAQ Inquries</h3>
            <p>
              <li>How often is new content posted on your blog? </li>
              <li>Can I contribute to your blog as a guest writer?</li>
              <li>How do I subscribe to your blog for updates?</li>
              <li>Do you accept advertising or sponsored posts?</li>
            </p>
          </div>
        </div>

        <div className="input_areas">
          <h3>Say Hello to Us</h3>

          <form method="POST" className="contact_form">
            <input
              type="text"
              placeholder="Your Name"
              className="contact_text"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="contact_text"
            />
            <textarea placeholder="Message"></textarea>
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Contact;
