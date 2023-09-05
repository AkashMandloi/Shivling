// Footer.js
import React from "react";
import "./footer.css";
import logo from "./Assests/LOGO.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footerStyl">
      <div className="Webname">
          <h3><b>ॐ<br></br> Narmadeshwar <br></br>Shivlingam</b></h3>
        </div>
        <div className="Fcontact">
          <div className="contactItem">
            <h3>Contact Info</h3>
            <p>
              Gram:Bakawan ,Dist:Khargoan<br></br>Madhya Pradesh,PIN:451113
              <br></br>
              Contact:-6263164373
            </p>
          </div>
        </div>
        <div className="QuickLinks">
          <h3>QuickLinks</h3>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </div>
        <div className="Ourservices">
          <h3>Our Services</h3>
          <li>All India Delivery</li>
          <li>Case On Delivery</li>
          <li>Return Policy</li>
        </div>
        <div className="Webname">
          <h3><b>ॐ<br></br> Narmadeshwar <br></br>Shivlingam</b></h3>
        </div>
      </footer>
      <div className="contentStyl">
        <p>
          &copy; {new Date().getFullYear()} ॐ Narmadeshwar Shivlingam. All
          rights reserved.
        </p>
        <p>Designed with ❤️  by WebSiteWaleBhaiya.in</p>
      </div>
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left">
          !!'ॐ' Narmadeshwar Shivling Ab Apke Dwar Tk 'ॐ'!!
        </marquee>
      </div>
    </>
  );
};

export default Footer;
