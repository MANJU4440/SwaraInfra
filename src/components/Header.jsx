import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheet/header.css';
import menuIcon from '../assets/navbarIMG/list-solid (2).svg';
import facebookIcon from '../assets/SocialMediaIcon/facebookIcon.png';
import Tweeter from '../assets/SocialMediaIcon/Tweeter.png';
import InstagramIcon from '../assets/SocialMediaIcon/InstagramIcon.png';
import linkedIn from '../assets/SocialMediaIcon/linkedIn.png';
import youtubeicon from '../assets/SocialMediaIcon/youTubeIcon.png';
import logo from '../assets/LOGO/logo.png';

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
}

function Header() {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header>
            {/* Social media icons */}
            <div className="social-icons">
                <a href="#"><img src={facebookIcon} alt="facebook-icon" /></a>
                <a href="#"><img src={Tweeter} alt="Twitter" /></a>
                <a href="https://www.instagram.com/swarainfra?igsh=MW5lNGRxOXNremNuZA=="><img src={InstagramIcon} alt="Instagram" /></a>
                <a href="#"><img src={linkedIn} alt="Linkedin" /></a>
                <a href="#"><img src={youtubeicon} alt="Youtube" /></a>
                {/* Add more social media icons as needed */}
            </div>

            <nav>
                <Link to="/home">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <ul className="nav-contents">
                    <li><Link to="*" className={`nav-construction ${getLinkClass('*')}`}>CONSTRUCTION</Link></li>
                    <li><Link to="/home" className={`home ${getLinkClass('/home')}`}>HOME</Link></li>
                    <li><Link to="/aboutus" className={`about ${getLinkClass('/aboutus')}`}>ABOUT US</Link></li>
                    <li><Link to="/packages" className={`package ${getLinkClass('/packages')}`}>PACKAGES</Link></li>
                    <li><Link to="/contact" className={`contact ${getLinkClass('/contact')}`}>CONTACT US</Link></li>
                </ul>
                <div className="navbar">
                    <span className="open-slide">
                        <a href="#" onClick={openSlideMenu}>
                            <img src={menuIcon} style={{ height: '40px', marginTop: '20px' }} alt="Menu Icon" />
                        </a>
                    </span>
                </div>
            </nav>
            <div id="side-menu" className="side-nav">
                <a href="#" className="btn-close" onClick={closeSlideMenu}>
                    <span style={{ color: 'rgb(247, 243, 243)', fontSize: '40px' }}>X</span>
                </a>
                <Link to="/" onClick={closeSlideMenu}>Construction</Link>
                <Link to="/home" onClick={closeSlideMenu}>Home</Link>
                <Link to="/aboutus" onClick={closeSlideMenu}>About us</Link>
                <Link to="/packages" onClick={closeSlideMenu}>Package</Link>
                <Link to="/contact" onClick={closeSlideMenu}>Contact us</Link>
            </div>
        </header>
    );
}

export default Header;
