import React from 'react';
import { render, screen } from '@testing-library/react';
import VotingCard from './components/VotingCard';

const person = {
  id: "1",
  name: "Pope Francis",
  description: "The Pope",
  category: "Religion",
  image: "https://www.biography.com/.image/t_share/MTQ3NTc2MjU5MjQ0MjUwMzUx/pope_francis_280716_edit.jpg",
  lastUpdated: "1 month",
  votes: {
    positive: 36,
    negative: 64
  },
  voted: false
}


it('should render a disabled vote now button', () => {
  render(<VotingCard
    key={person.id}
    id={person.id}
    name={person.name}
    description={person.description}
    category={person.category}
    picture={person.image}
    lastUpdated={person.lastUpdated}
    votes={person.votes}
    voted={person.voted}/>)

  const voteNowButton = screen.getByText(/Vote Now/i);
  expect(voteNowButton).toBeDisabled();
});

it('should render and enabled vote again button and thanks you message if the card has been voted', () => {
  render(<VotingCard
    key={person.id}
    id={person.id}
    name={person.name}
    description={person.description}
    category={person.category}
    picture={person.image}
    lastUpdated={person.lastUpdated}
    votes={person.votes}
    voted={true}/>)

  const voteAgainButton = screen.getByText(/Vote Again/i);
  const thankYouMessage = screen.getByText(/Thank you for your vote!/i);

  expect(voteAgainButton).toBeEnabled();
  expect(thankYouMessage).toBeInTheDocument();
});


