import React from 'react';
import { useLocation } from 'react-router-dom';
import { imageMap, topPrices }  from '../data'; 
import { barberImages }  from '../data'; 
import galleryimage from '../assets/images/hero3.jpg';



const GalleryIntroSection = () => {
  return (
    <section className="gallery_intro d-flex flex-wrap align-items-center justify-content-between mt-2 ">
      <div className='flex_gallery'>
        <div className="gallery-text col-12 col-md-5 col-lg-5">
          <h1>Gallery</h1>
        </div>
        <div className="gallery_image col-12 col-md-7 col-lg-7 text-center">
          <img src={galleryimage} alt="Gallery Intro" className='intro_image' />
        </div>
      </div>
    </section>
  );
};





const GallerySection = () => {
    return(
        <section className="Gallery_section mt-5">
            <div className='flex_gallery'>
                <div className="col-12 col-md-12 col-lg-7">
                    <div className="barber_Img" id="barber_Img">
                        <div className="row">
                            {barberImages.slice(0, 3).map((img, idx) => (
                                <div className="col-4" key={idx}>
                                    <img src={imageMap[img.src]} alt={img.alt} className={img.className} />
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            {barberImages.slice(3, 6).map((img, idx) => (
                                <div className="col-4" key={idx}>
                                    <img src={imageMap[img.src]} alt={img.alt} className={img.className} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=" text_2 col-12 col-md-12 col-lg-5"> 
                    <div className="topPrices" id="topPrices">
                        <h2 className="text-center mb-3">Our Top Prices</h2>
                        <div className="top-prices">
                            {topPrices.map((item, idx) => (
                                <div key={idx} className="mb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">{item.name}</h5>
                                        <span className="text-danger h6 mb-0">{item.price}</span>
                                    </div>
                                    <hr className="my-2 priceTag" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Gallery = () => {
  const location = useLocation();
  const isGalleryPage = location.pathname === '/gallery';

  return (
    <>
      {isGalleryPage && <GalleryIntroSection />}
      <GallerySection />
    </>
  );
};


export default Gallery;
