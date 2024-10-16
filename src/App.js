import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/pages/HomePage.js";
import Footer from "./components/layouts/Footer/Footer.js";
import "./App.css";
import ModalComponent from "./components/layouts/ModalComponent.js";
import Preloader from "./components/layouts/Preloader.js";
import ContactPage from "./components/pages/ContactPage.js";
import AboutPage from "./components/pages/AboutPage.js";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading delay
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <AppContent />
        </Router>
      )}
    </>
  );
};

const AppContent = () => {
  const location = useLocation();
  
  return (
    <div style={{ position: "relative" }}>
      {location.pathname === "/" && <ModalComponent />} {/* Show modal only on Home page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
