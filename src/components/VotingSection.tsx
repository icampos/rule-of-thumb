import { ReactNode } from "react";

interface VotingSectionProps {
  children: ReactNode;
}

const VotingSection = ({ children }: VotingSectionProps) => {
  return (
    <section className="voting-section">
      <div className="voting-section__header">
        <h3 className="voting-section__title">Previous Rulings</h3>
        <select className="voting-section__picker">
          <option value="list">List</option>
          <option value="grid">Grid</option>
        </select>
      </div>
      <div className="voting-section__list">{children}</div>
    </section>
  );
};

export default VotingSection;
