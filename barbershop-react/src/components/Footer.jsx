import React from "react";
import { IoCall } from "react-icons/io5";
import { FaPaperPlane, FaInstagram, FaLinkedin, FaFacebookF, FaHeart } from "react-icons/fa";
import footerpic from  '../assets/images/logo.png';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        {/* Contact Info Left */}
        <div className="footer-box">
          <IoCall className="footer-icon" />
          <h3>Contact Info</h3>
          <ul>
            <li>913-473-7000</li>
            <li>contact@cakeshop.com</li>
          </ul>
        </div>

        {/* Center Logo & Social */}
        <div className="footer-middle">
          <div className="footer-logo">
            <img src={footerpic} alt="Footer Logo" />
          </div>
          <p>There are many variations of passages of Lorem Ipsum available be the majority.</p>

          <div className="footer-social">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>

        {/* Contact Info Right (Can be newsletter if you prefer) */}
        <div className="footer-box">
          <FaPaperPlane className="footer-icon" />
          <h3>Contact Info</h3>
          <ul>
            <li>913-473-7000</li>
            <li>contact@cakeshop.com</li>
          </ul>
        </div>
      </div>

      <hr className="custom-hr" />

      <div className="footer-copy">
        <p>
           {new Date().getFullYear()} Marbiks. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;

