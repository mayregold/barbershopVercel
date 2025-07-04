import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FiMenu } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);


  return (
    <header className="header_area">
        <div className="main_menu">
            <div>
                <Link className="navbar-brand logo_h" to="/" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="logo" />
                </Link>
            </div>

            <button className="navbar-toggler" onClick={toggleNavbar}>
                {isOpen ? <MdCancel size={24} color="#fff" /> : <FiMenu size={30} color="#fff" />}
            </button>
            
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service" onClick={() => setIsOpen(false)}>SERVICE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery" onClick={() => setIsOpen(false)} >GALLERY</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"> BLOG</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link></li>
                                    <li><Link className="dropdown-item" to="/blog" onClick={() => setIsOpen(false)}>BLOG DETAILS</Link></li>
                                    <li><Link className="dropdown-item" to="/blog" onClick={() => setIsOpen(false)}>ELEMENTS</Link></li>
                                </ul>
                           </li>
                           <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
                           </li>
                           <li className="btn-group">
                            <button type="button">FREE QUOTE</button>
                           </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    </header>
  );
};

export default Navbar;
