import React, { useState } from "react";
import { MdPerson2 } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaComments } from "react-icons/fa6";
import { allblogsdata, allPost, allFeed, tagCloud } from "../data";
import blogimage from '../assets/images/hero1.jpg';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
    <section className="blog_intro d-flex flex-wrap align-items-center justify-content-between mt-2 ">
          <div className='flex_blog'>
            <div className="blog-text col-12 col-md-5 col-lg-5">
              <h1>Blog</h1>
            </div>
            <div className="blog_image col-12 col-md-7 col-lg-7 text-center">
              <img src={blogimage} alt="blog Intro" className='intro_image' />
            </div>
          </div>
    </section>
    
      

      <section className="blog-section py-5">
        <div className="container">
          <div className="row">
            {/* Blog Left Content */}
            <div className="col-lg-8">
              {allblogsdata.map(({ id, blog, para, text }) => (
                <div className="card mb-5 blog-card border-0 shadow-sm" key={id}>
                  <div className="position-relative">
                    <img src={blog} className="card-img-top" alt="blog" />
                    <div className="date-overlay position-absolute text-center text-white">
                      <span className="h4 d-block">15</span>
                      <small>Jan</small>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{text}</h5>
                    <p className="card-text text-muted">{para}</p>
                    <div className="d-flex gap-3 text-muted small">
                      <span className="d-flex align-items-center gap-1">
                        <MdPerson2 /> Travel, Lifestyle
                      </span>
                      <span>|</span>
                      <span className="d-flex align-items-center gap-1">
                        <FaComments /> 03 Comments
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-center gap-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FiChevronLeft />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`btn ${currentPage === i + 1 ? 'btn-danger' : 'btn-outline-secondary'}`}
                    onClick={() => goToPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>

            {/* Blog Right Sidebar */}
            <div className="col-lg-4">
              <div className="mb-4">
                <input className="form-control mb-2" placeholder="Search Keyword" />
                <button className="btn btn-danger w-100">Search</button>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold">Category</h5>
                <ul className="list-unstyled">
                  {['Restaurant food', 'Travel news', 'Modern technology', 'Product', 'Inspiration', 'Health Care'].map((item, i) => (
                    <li className="mb-2 d-flex justify-content-between border-bottom pb-1" key={i}>
                      <span>{item}</span>
                      <span className="text-muted">({Math.floor(Math.random() * 40)})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold">Recent Posts</h5>
                {allPost.map(({ id, post, text, date }) => (
                  <div className="d-flex mb-3" key={id}>
                    <img src={post} alt="post" width="70" className="me-3 rounded" />
                    <div>
                      <p className="mb-1 fw-semibold small">{text}</p>
                      <span className="text-muted small">{date}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <h5 className="fw-bold">Tag Clouds</h5>
                <div className="d-flex flex-wrap gap-2">
                  {tagCloud.map(({ id, text }) => (
                    <span key={id} className="badge bg-light text-dark border">
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold">Instagram Feeds</h5>
                <div className="row g-2">
                  {allFeed.map(({ id, insta }) => (
                    <div className="col-4" key={id}>
                      <img src={insta} alt="insta" className="img-fluid rounded" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold">Newsletter</h5>
                <input className="form-control mb-2" placeholder="Enter Email" />
                <button className="btn btn-danger w-100">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

