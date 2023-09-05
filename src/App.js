import React from "react";
import Navbar from "./Components/navbar";
import Product from "./Components/product";
import Footer from "./Components/footer";
import Imagebody from "./Components/Imagebody";
import Frames from "./Components/Frames";
import AttractiveComponent from "./Components/Services";
import SocialMedia from "./Components/SocialMedia";

import './App.css'

function App() {
  return (
    <>
    
      <Navbar />
      

      <Imagebody />
      
      <SocialMedia/>
      <Product />

      <Frames />
      <AttractiveComponent />

      <Footer />
    </>
  );
}

export default App;
