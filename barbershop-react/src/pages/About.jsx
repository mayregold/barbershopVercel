// src/components/About.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import aboutimage from '../assets/images/about1.jpg'; 
import heroimage from '../assets/images/hero1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Service from './Service';

const AboutIntroSection = () => {
  return (
    <section className="about_intro d-flex flex-wrap align-items-center justify-content-between mt-2">
      <div className='flex_about'>
        <div className="intro-text col-12 col-md-5 col-lg-5">
          <h1>About Us</h1>
        </div>
        <div className="intro_image col-12 col-md-7 col-lg-7 text-center">
          <img src={heroimage} alt="About Intro" className='intro_image' />
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="About_section mt-5">
      <div className='flex_about'>
        <div className="text_1 col-12 col-md-4 col-lg-4">
          <div className="d-flex flex-column">
            {[
              'Be the majority have suffered alteration in some form, by injected humour.',
              'Psum available be the majority have suffered alteration in some form, by injected humour.',
              'Available be the majority have suffered alteration in some form, by injected humour.',
              'Humour available be the majority have suffered alteration in some form, by injected.'
            ].map((text, index) => (
              <div className="d-flex align-items-start mb-3" key={index}>
                <FontAwesomeIcon icon={faCircleCheck} size="3x" className="text-danger me-3 mt-1" />
                <p className="mb-0">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-img col-12 col-md-4 col-lg-4">
          <img src={aboutimage} alt="hero1" className="about-img" />
        </div>

        <div className="text_2 col-12 col-md-4 col-lg-4">
          <h2>ABOUT OUR <br />STORY</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available.<br />
            The majority have suffered alteration in some form, by injected humour or randomised words.
          </p>

          <button type="button">
            <Link to="/booking" className="text-decoration-none">Book Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
};


const About = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <>
      {isAboutPage && <AboutIntroSection />}
      
      {/* ✅ AboutSection shows always */}
      <AboutSection />

      {/* ✅ Service shows only on /about */}
      {isAboutPage && <Service />}
    </>
  );
};

export default About;

