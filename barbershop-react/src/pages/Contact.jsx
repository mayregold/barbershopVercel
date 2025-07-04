
import React from "react";
import contactimage from "../assets/images/hero1.jpg";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
       <section className="contact_intro d-flex flex-wrap align-items-center justify-content-between mt-2 ">
            <div className='flex_contact'>
              <div className="contact-text col-12 col-md-5 col-lg-5">
                <h1>contact</h1>
              </div>
              <div className="contact_image col-12 col-md-7 col-lg-7 text-center">
                <img src={contactimage} alt="contact Intro" className='intro_image' />
              </div>
            </div>
        </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-wrapper">
          {/* Left - Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <h4>Buttonwood, California.</h4>
              <p>Rosemead, CA 91770</p>
            </div>
            <div className="info-item">
              <h4>+1 253 565 2365</h4>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
            <div className="info-item">
              <h4>support@colorlib.com</h4>
              <p>Send us your query anytime!</p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="contact-form">
            <form>
              <div className="form-row">
                <input type="text" placeholder="Enter your name" required />
                <input type="email" placeholder="Enter email address" required />
              </div>
              <input type="text" placeholder="Enter subject" required />
              <textarea placeholder="Enter message" rows="6" required></textarea>
              <button type="submit" className="btn-send">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;


