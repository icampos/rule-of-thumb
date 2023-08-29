import React from "react";
import "./App.scss";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerTop from "./components/BannerTop";
import BannerBottom from "./components/BannerBottom";
import VotingSection from "./components/VotingSection";
import VotingCard from "./components/VotingCard";

import PopeFrancisImg from './assets/img/pope-francis.png'

const votes = {
  positive: 1,
  negative: 1,
};
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="max-centered">
        <BannerTop />
        <VotingSection>
          <VotingCard
            name="Kanye West"
            description="Vestibulum diam ante, porttitor a odio eget, rhoncus.  Eu velit…"
            category="Enterteinment"
            picture={PopeFrancisImg}
            lastUpdated=""
            votes={votes}
          />
        </VotingSection>
        <BannerBottom />
        <hr role="separator" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
