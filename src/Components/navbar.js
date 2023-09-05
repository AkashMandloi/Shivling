import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import logo from "./Assests/LOGO.png";
const navbar = () => {
  const redirectToWhatsApp = () => {
    const phoneNumbe = '9111575948';
    const message = 'I want to Purchase Shivling';
    
    // Create a valid WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumbe}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
  };
  const handlePhoneCall = () => {
    const phoneNumber = "9131200544";
    window.location.href = `tel:${phoneNumber}`;
  };
  const redirectToInstagramProfile = () => {
    window.location.href = `https://instagram.com/shiv_bhagti_?igshid=MmIzYWVlNDQ5Yg==`;
  };
  const redirectToFacebook = () => {
    window.location.href = `https://www.facebook.com/profile.php?id=100094734821560&mibextid=b06tZ0`;
  };
  const redirectToYoutube = () => {
    window.location.href = `https://www.youtube.com/@Shiv_Bhagti`;
  };
  return (
    <>
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left">
          !!'ॐ' Narmadeshwar Shivling Ab Apke Dwar Tk 'ॐ'!!
        </marquee>
      </div>
      <div className="navbar">
        <div className="webname">
          <h3><b>ॐ Narmadeshwar Shivlingam</b></h3>
        </div>
        <div className="navlink">
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
        <div className="contactbottons">
          <i
            className="fa-solid fa-phone-volume fa-2xl NavContact"
            style={{color:"black;"}}
            onClick={handlePhoneCall}
          />
          <i
            className="fa-brands fa-youtube fa-2xl NavContact" onClick={redirectToYoutube}
            style={{ color: " #df1c07;" }}
          />
          <i
            className="fa-brands fa-facebook fa-2xl NavContact" onClick={redirectToFacebook}
            style={{ color: "#3065c0;" }}
          />

          <i
            className="fa-brands fa-instagram fa-2xl NavContact" onClick={ redirectToInstagramProfile}
            style={{ color: " #ee3a55;" }}
          />

          <i
            className="fa-brands fa-whatsapp fa-2xl NavContact"
            
            onClick={redirectToWhatsApp}
          />
        </div>
      </div>
    </>
  );
};

export default navbar;
