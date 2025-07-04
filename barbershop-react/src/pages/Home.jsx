import React from 'react';
import { Link } from 'react-router-dom';
import heroimage from '../assets/images/h1_hero1.jpg';  
import AboutSection from './About';
import Gallery from './Gallery';
import Service from './Service'; 




const Home = () => (
  <>
    <section className="home_section mt-2">
      <div className="flex_hero">
        <div className="text_center  col-12 col-md-5 col-lg-5">
          <h1>WE'RE THE <br /> LAST OF <br /> BREED.</h1>
          <p>Achieve your Dream Style</p>
          <div className="btn-home">
            <button type='button'><Link>Book Now</Link></button>
          </div>
        </div>
        <div className="hero_barber col-12 col-md-7 col-lg-7">
          <img src={heroimage} className="hero-image" alt="Barber hero" />
        </div>
      </div>

    </section>

    <AboutSection />
    <Gallery />
    <Service />
    




  </>

);

export default Home;
