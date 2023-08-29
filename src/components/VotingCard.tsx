import ThumbsUpImg from "../assets/img/thumbs-up.svg";
import ThumbsDownImg from "../assets/img/thumbs-down.svg";

interface VotingCardProps {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: {
    positive: number
    negative: number
  }
}

const VotingCard = ({
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
}: VotingCardProps) => {
  return (
    <>
      <img
        className="voting-card__background"
        src={picture}
        alt={name}
      />
      <div className="voting-card">
        <div className="voting-card__glass-background"></div>
        <div className="voting-card__content">
          <h2 className="voting-card__title">{name}</h2>
          <p className="voting-card__desc">
            {description}
          </p>
          <p className="voting-card__cta">{category}</p>
          <div className="voting-card__buttons">
            <button className="icon-button" aria-label="thumbs up">
              <img src={ThumbsUpImg} alt="thumbs up" />
            </button>
            <button className="icon-button" aria-label="thumbs down">
              <img src={ThumbsDownImg} alt="thumbs down" />
            </button>
            <button aria-label="vote now">Vote Now</button>
          </div>
        </div>
      </div>
      <div className="voting-gauge">
        <div className="voting-gauge__left">
          <span className="voting-gauge__number">{votes.positive}</span>
        </div>
        <div className="voting-gauge__right">
          <span className="voting-gauge__number">{votes.negative}</span>
        </div>
      </div>
    </>
  );
};

export default VotingCard;
