import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import SwaraInfra from './pages/SwaraInfra';
import HomePage from './pages/HomePage';
import Package from './pages/Package';
import ContactUs from './pages/Contactus';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="*" element={<SwaraInfra />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/packages" element={<Package />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
