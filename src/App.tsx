import "./App.scss";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerTop from "./components/BannerTop";
import BannerBottom from "./components/BannerBottom";
import VotingSection from "./components/VotingSection";
import VotingCard from "./components/VotingCard";

import useFetchData from "./hooks/useFetchData";

import PopeFrancisImg from "./assets/img/pope-francis.png";

function App() {
  const { people } = useFetchData();

  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="max-centered">
        <BannerTop />
        <VotingSection>
          {people?.map((person) => (
            <VotingCard
              key={person.id}
              name={person.name}
              description={person.description}
              category={person.category}
              picture={PopeFrancisImg}
              lastUpdated={person.lastUpdated}
              votes={person.votes}
              voted={person.voted}
            />
          ))}
        </VotingSection>
        <BannerBottom />
        <hr role="separator" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
