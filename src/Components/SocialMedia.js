import React from 'react'
import './Social.css'

const SocialMedia = () => {
  const redirectToWhatsApp = () => {
    const phoneNumbe = '916263164373';
    const message = 'I want to Purchase Shivling';
    
    // Create a valid WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumbe}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
  };
  const redirectToInstagramProfile = () => {
    window.location.href = `https://instagram.com/shiv_bhagti_?igshid=MmIzYWVlNDQ5Yg==`;
  };
  const handlePhoneCall = () => {
    const phoneNumber = "9131200544";
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div>
        <div class="icon-bar">
        <i class="fa-brands fa-square-whatsapp fa-2xl a"  onClick={redirectToWhatsApp} style={{color: "#3ffb32;"}}></i>
        <i class="fa-brands fa-square-instagram fa-2xl a" onClick={ redirectToInstagramProfile} style={{color: "#f14b04;"}}></i>
        <i class="fa-solid fa-phone-volume fa-2xl a AA" onClick={handlePhoneCall}  style={{color:" #005cfa;"}}></i>
        </div>

      
    </div>
  )
}

export default SocialMedia
