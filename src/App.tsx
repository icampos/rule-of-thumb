import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerTop from "./components/BannerTop";
import BannerBottom from "./components/BannerBottom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="max-centered">
        <BannerTop />
        <BannerBottom />
        <hr role="separator" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
