import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import heroimage from '../assets/images/hero2.jpg';
import serviceimage from '../assets/images/service2.jpg';
import img1 from '../assets/images/instra1.jpg';
import img2 from '../assets/images/instra2.jpg';
import img3 from '../assets/images/instra3.jpg';
import img4 from '../assets/images/instra4.jpg';
import { services, allTestimonial, hairServices, beardServices } from '../data';

const ServiceIntroSection = () => (
  <section className="service_intro d-flex flex-wrap align-items-center justify-content-between mt-2 ">
    <div className="flex_service">
      <div className="service-text col-12 col-md-5 col-lg-5">
        <h1>Services</h1>
      </div>
      <div className="service_img col-12 col-md-7 col-lg-7 text-center">
        <img src={heroimage} alt="Service Intro" className="intro_img" />
      </div>
    </div>
  </section>
);

const ServiceBarber = () => {
  const [openSection, setOpenSection] = useState('hair');

  const renderList = (items) =>
    items.map((item, index) => (
      <li key={index} className="d-flex justify-content-between border-bottom py-2">
        <span>{item.name || item}</span>
        <span className="text-danger fw-bold">${item.price || 40}</span>
      </li>
    ));

  return (
    <section className="container py-5">
      <h2 className="text-start fw-bold mb-5">ALL WE DO FOR YOU</h2>
      <div className="row align-items-start">
        <div className="col-md-6 col-lg-6">
          <div className="barber w-100">
            {/* Hair Section */}
            <div className="barber-item">
              <h2 className="barber-header">
                <button
                  className={`barber-button ${openSection !== 'hair' ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => setOpenSection(openSection === 'hair' ? '' : 'hair')}
                >
                  For Hair
                </button>
              </h2>
              <div className={`barber-collapse collapse ${openSection === 'hair' ? 'show' : ''}`}>
                <div className="barber-body">
                  <ul className="list-unstyled">{renderList(hairServices)}</ul>
                </div>
              </div>
            </div>

            {/* Beard Section */}
            <div className="barber-item mt-3">
              <h2 className="barber-header">
                <button
                  className={`barber-button ${openSection !== 'beard' ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => setOpenSection(openSection === 'beard' ? '' : 'beard')}
                >
                  For Beard
                </button>
              </h2>
              <div className={`barber-collapse collapse ${openSection === 'beard' ? 'show' : ''}`}>
                <div className="barber-body">
                  <ul className="list-unstyled">{renderList(beardServices)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-md-6 col-lg-6 text-center">
          <img src={serviceimage} alt="Service visual" className="img-fluid rounded" />
        </div>
      </div>
    </section>
  );
};

const ServiceExtras = () => (
  <>
    {/* Services Cards */}
    <section className="services-section">
      <div className="services-container">
        {services.map(({ id, icon, title, description }) => (
          <div className="container-card" key={id}>
            <img src={icon} alt={`${title} icon`} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="scrolling-image">
      <div className="scrolling-track">
        {[img1, img2, img3, img4, img1, img2, img3, img4].map((img, i) => (
          <div className="scroll-img" key={i}>
            <img src={img} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>
    </section>


    {/* Customer Testimonials */}
    <section className="customer-section">
      <div className="customer-line">
        <h1>Customers Say About Us</h1>
      </div>
      <div className="customer-flex-container">
        {allTestimonial.map(({ id, name, text, test }) => (
          <div className="customer-flex" key={id}>
            <p className="customer-paragraph">"{text}"</p>
            <div className="profile">
              <img src={test} alt={name} />
              <p className="gettoknow">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

const Service = () => {
  const location = useLocation();
  const isServicePage = location.pathname === '/service';
  const isAboutPage = location.pathname === '/about';
  const isHomePage = location.pathname === '/';

  const showExtras = isServicePage || isAboutPage || isHomePage;

  return (
    <>
      {isServicePage && <ServiceIntroSection />}
      {showExtras && <ServiceBarber />}
      {showExtras && <ServiceExtras />}
    </>
  );
};

export default Service;
