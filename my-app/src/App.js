import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./pages/Home";
import CleanElectricity from "./pages/CleanElectricity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import Careers from "./pages/Careers";
import OurTeam from "./pages/OurTeam";
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="clean-electricity" element={<CleanElectricity />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="articles" element={<Articles />} />
          <Route path="careers" element={<Careers />} />
          <Route path="our-team" element={<OurTeam />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}



export default App;
