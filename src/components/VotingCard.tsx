import { useContext } from "react";

import "../styles/VotingCard.scss";
import { AppContext } from "../context";
import useVoting from "../hooks/useVoting";

import ThumbsUpImg from "../assets/img/thumbs-up.svg";
import ThumbsDownImg from "../assets/img/thumbs-down.svg";

import { POSITIVE_STATUS, NEGATIVE_STATUS } from "../constants";
interface VotingCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  voted: boolean;
  votes: {
    positive: number;
    negative: number;
  };
}

const VotingCard = ({
  id,
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
  voted,
}: VotingCardProps) => {
  const viewOption = useContext(AppContext);

  const {
    isVoteNowDisabled,
    handleThumbsClick,
    selectedClass,
    getPercentages,
    handleUpdateData,
    isVoted,
  } = useVoting({id, votes, voted});

  const votedState = isVoted
    ? {
        categoryText: "Thank you for your vote!",
        voteButtonText: "Vote Again",
      }
    : {
        categoryText: `${lastUpdated} ago in ${category}`,
        voteButtonText: "Vote Now",
      };

  const result =
    votes.positive > votes.negative
      ? { resultClass: "positive", resultIcon: ThumbsUpImg }
      : { resultClass: "negative", resultIcon: ThumbsDownImg };

  const percentages = getPercentages(votes.positive, votes.negative);

  return (
    <div className={`voting-card ${viewOption}`}>
      <img className="voting-card__background" src={picture} alt={name} />
      <div className="voting-card__glass-background"></div>
      <div className="voting-card__content">
        <div className="voting-card__details">
          <div className="voting-card__info">
            <div
              className={`voting-card__result voting-card__${result.resultClass}`}
            >
              <img src={result.resultIcon} alt="thumbs up" />
            </div>
            <div>
              <h2 className="voting-card__title">{name}</h2>
              <p className="voting-card__description">{description}</p>
            </div>
          </div>
          <div className="voting-card__cta">
            <p className="voting-card__category">{votedState.categoryText}</p>
            <div className={`voting-card__buttons ${selectedClass}`}>
              <button
                onClick={() => handleThumbsClick(POSITIVE_STATUS)}
                className="icon-button"
                aria-label="thumbs up"
              >
                <img src={ThumbsUpImg} alt="thumbs up" />
              </button>
              <button
                onClick={() => handleThumbsClick(NEGATIVE_STATUS)}
                className="icon-button"
                aria-label="thumbs down"
              >
                <img src={ThumbsDownImg} alt="thumbs down" />
              </button>
              <button
                className="voting-card__vote-button"
                aria-label="vote now"
                disabled={isVoteNowDisabled}
                onClick={handleUpdateData}
              >
                {votedState.voteButtonText}
              </button>
            </div>
          </div>
        </div>
        <div className="voting-card__gauge">
          <div
            className="voting-card__gauge-left"
            style={{ width: `${percentages.positive}%` }}
          >
            <img src={ThumbsUpImg} alt="thumbs up" />
            <span className="voting-card__gauge-number">
              {percentages.positive} %
            </span>
          </div>
          <div
            className="voting-card__gauge-right"
            style={{ width: `${percentages.negative}%` }}
          >
            <img src={ThumbsDownImg} alt="thumbs down" />
            <span className="voting-card__gauge-number">
              {percentages.negative} %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingCard;
