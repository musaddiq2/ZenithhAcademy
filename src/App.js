import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ModalComponent from "./components/ModalComponent.js";
import Preloader from "./components/Preloader.js";
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
        <div style={{ position: "relative" }}>
          <HomePage />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
