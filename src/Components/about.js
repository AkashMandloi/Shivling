import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import AttractiveComponent from './Services'
import './About.css'
import img from './Assests/Om.jpeg'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className='blink'>
      <p><b>Welcome to our journey where spirituality and innovation converge.</b></p>
      </div>
      
      <div className="shivling-section">
        <h2>Narmadeshwar Shivling: Our Emblem of Unity</h2>
        <h2>Origins and History</h2>
        <p>The Narmadeshwar Shivling holds its origins in the sacred Narmada River of India. For centuries, this naturally formed lingam has been revered as a divine representation of Lord Shiva. The lingam, characterized by its distinct markings, is believed to carry the energy of the Narmada River and symbolizes the eternal cycle of creation and destruction.</p>
      </div>
      
      {/* Other sections and content */}
      
      
      
    
      <img
        src={img} // Replace with the path to your image
        alt="About Us"
        className="about-us-image"
      />
      <div className="about-us-description">
      <h3>नर्मदेश्वर शिवलिंग </h3>
        <p className='para'>
        नर्मदेश्वर शिवलिंग प्राकृतिक शिला से बना होता है जिसे नर्मदा नदी के किनारे पाया जाता है। इसमें कई मानसिक, आध्यात्मिक और शारीरिक गुण होते हैं। इसकी स्पर्शशीलता से अभिषेक करने से धार्मिक भावना उत्पन्न होती है। यह शिवलिंग ध्यान में लगाने से मन की शांति मिलती है और आध्यात्मिकता का अनुभव होता है। नर्मदेश्वर शिवलिंग को पूजन करने से व्यक्ति के जीवन में समृद्धि, सफलता, और उत्तरोत्तर उन्नति का मार्ग प्रशस्त होता है। इसका सेवन मानसिक तनाव को कम करने में सहायक होता है और शरीर को ऊर्जा से भर देता है।
        </p>
        <h3>नर्मदेश्वर शिवलिंग का इतिहास</h3>
        <p className='para'>
        नर्मदेश्वर शिवलिंग का इतिहास
नर्मदेश्वर शिवलिंग का इतिहास वेद पुराणों में विस्तार से वर्णित है। पुरातन काल में, महर्षि व्यास ने इस प्राचीन शिवलिंग को भगवान शिव के साथ जोड़ा था और उसकी महिमा गाई थी। इसे नर्मदेश्वर शिवलिंग के रूप में पुकारा जाने लगा और धीरे-धीरे यह स्थान भगवान शिव की पूजा और भक्ति का एक महत्वपूर्ण केंद्र बन गया।
        </p>
        <h3>नर्मदेश्वर शिवलिंग के धार्मिक महत्व</h3>
        <p className='para'>नर्मदेश्वर शिवलिंग धार्मिक रूप से बहुत महत्वपूर्ण है और इसे भगवान शिव के ध्यान और भक्ति में एक महत्वपूर्ण स्थान के रूप में जाना जाता है। यहां आने वाले श्रद्धालु अपने मन की शांति और सुकून के लिए प्रार्थना करते हैं और भगवान शिव से अपनी मनोकामनाएं पूरी करवाने की कामना करते हैं। धार्मिक महत्व के साथ, यह स्थान प्राकृत</p>
        

      </div>
    </div>
    <AttractiveComponent />
    <Footer/>
    </>
  )
}

export default About