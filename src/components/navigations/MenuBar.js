import React from 'react';
import logo from '../../images/logo.png';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

import './MenuBar.css';

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'> <img src={logo} alt="" width="50px" heig5t="50px" /></a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/AboutUs">About</a></li>
                    <li><a href="http://localhost:3000/#work">Work</a></li>
                    <li><a href="http://localhost:3000/#process">Process</a></li>
                    <li><a href="http://localhost:3000/#services">Services</a></li>
                    <li><a href="http://localhost:3000/#testimonials">Testimonials</a></li>
                    <li><a href="/ContactUs">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;