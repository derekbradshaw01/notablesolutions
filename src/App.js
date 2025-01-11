


import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";

import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";

function App() {
  return (

<div className="app-container">
  <main className="content">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </main>
  <Footer />
</div>

    
  );
}

export default App;
