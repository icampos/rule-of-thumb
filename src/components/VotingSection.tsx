import { useState, ReactNode } from "react";
import {AppContext} from "../context"

import "../styles/VotingSection.scss";
interface VotingSectionProps {
  children: ReactNode;
}

const VotingSection = ({ children }: VotingSectionProps) => {
  const [view, setView] = useState("list");

  return (
    <AppContext.Provider value={view}>
      <section className="voting-section">
        <div className="voting-section__header">
          <h3 className="voting-section__title">Previous Rulings</h3>
          <select
            className="voting-section__picker"
            onChange={(e) => setView(e.target.value)}
            value={view}
          >
            <option value="list">List</option>
            <option value="grid">Grid</option>
          </select>
        </div>
        <div className="voting-section__list">{children}</div>
      </section>
    </AppContext.Provider>
  );
};

export default VotingSection;
