import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import AttractiveComponent from './Services'

import './contact.css'


// src/components/ContactUs.js



const ContactUs = () => {
  

  const handleAddressClick = () => {
    
    const address = 'Bakawan,Dist:khargoan ,Madhya Pradesh ,PIN:451113';
    const encodedAddress = encodeURIComponent(address);
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <>
    <Navbar/>
    <div className="contact-us-container">
      <div className="contact-info">
        <h3>Contact Details</h3>
        <p>Email: omnarmadeshwar@gmail.com</p>
        <p>Phone: +91 6263164373  ,9131200544</p>
        <p onClick={handleAddressClick} style={{ cursor: 'pointer' }}>
          Address: Bakawan,Mardana Main Road ,Dist:khargoan ,Madhya Pradesh ,PIN:451113  <span>(Click to view on Google Maps)</span>
        </p>
      </div>
      
    </div>
    <AttractiveComponent />
    <Footer/>
    </>
  );
};

export default ContactUs;
