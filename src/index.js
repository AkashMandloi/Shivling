import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import About from './Components/about';
import Contact from './Components/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </>
);


reportWebVitals();
