import { useContext } from "react";

import "../styles/VotingCard.scss";
import {AppContext} from "../context"

import ThumbsUpImg from "../assets/img/thumbs-up.svg";
import ThumbsDownImg from "../assets/img/thumbs-down.svg";

interface VotingCardProps {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
}

const VotingCard = ({
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
}: VotingCardProps) => {
  const viewOption = useContext(AppContext);

  return (
    <div className={`voting-card voting-card__${viewOption}`}>
      <img className="voting-card__background" src={picture} alt={name} />
      <div className="voting-card__glass-background"></div>
      <div className="voting-card__content">
        <div className="voting-card__details">
          <div className="voting-card__info">
            <div className="voting-card__result voting-card__positive">
              <img src={ThumbsUpImg} alt="thumbs up" />
            </div>
            <div>
              <h2 className="voting-card__title">{name}</h2>
              <p className="voting-card__description">{description}</p>
            </div>
          </div>
          <div className="voting-card__cta">
            <p className="voting-card__category">{category}</p>
            <div className="voting-card__buttons">
              <button className="icon-button" aria-label="thumbs up">
                <img src={ThumbsUpImg} alt="thumbs up" />
              </button>
              <button className="icon-button" aria-label="thumbs down">
                <img src={ThumbsDownImg} alt="thumbs down" />
              </button>
              <button
                className="voting-card__vote-button"
                aria-label="vote now"
              >
                Vote Now
              </button>
            </div>
          </div>
        </div>
        <div className="voting-card__gauge">
          <div className="voting-card__gauge-left">
            <img src={ThumbsUpImg} alt="thumbs up" />
            <span className="voting-card__gauge-number">{votes.positive}</span>
          </div>
          <div className="voting-card__gauge-right">
            <img src={ThumbsDownImg} alt="thumbs down" />
            <span className="voting-card__gauge-number">{votes.negative}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingCard;
