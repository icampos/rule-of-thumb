import { useState } from "react";
import { NEGATIVE_STATUS, POSITIVE_STATUS } from "../constants";
import UseUpdateData from "./useUpdateData";

interface useVotingProps {
  id: string;
  votes: {
    positive: number;
    negative: number;
  };
}

const useVoting = ({ id, votes }: useVotingProps) => {
  const [isVoteNowDisabled, setIsVoteNowDisabled] = useState(true);
  const [isPositiveSelected, setisPositiveSelected] = useState<boolean>(false);
  const [isNegativeSelected, setisNegativeSelected] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selection, setSelection] = useState<string | null>(null);

  const handleThumbsClick = (selection: string) => {
    setIsVoteNowDisabled(false);
    setSelection(selection);
    if (selection === POSITIVE_STATUS) {
      setisPositiveSelected(true);
      setisNegativeSelected(false);
      setSelectedClass("thumbs-up");
    } else {
      setisPositiveSelected(false);
      setisNegativeSelected(true);
      setSelectedClass("thumbs-down");
    }
  };

  const handleUpdateData = () => {
    const positive =
      selection === POSITIVE_STATUS ? votes.positive + 1 : votes.positive;
    const negative =
      selection === NEGATIVE_STATUS ? votes.negative + 1 : votes.negative;

    const updatedVotes = {
      positive: positive,
      negative: negative,
    };
    UseUpdateData(id, selection, updatedVotes, true);
  };

  const getPercentages = (positive: number, negative: number) => {
    const totalVotes = positive + negative;

    return {
      positive: ((positive / totalVotes) * 100).toFixed(1),
      negative: ((negative / totalVotes) * 100).toFixed(1),
    };
  };

  return {
    isNegativeSelected,
    isPositiveSelected,
    isVoteNowDisabled,
    handleThumbsClick,
    setIsVoteNowDisabled,
    selectedClass,
    getPercentages,
    handleUpdateData,
  };
};

export default useVoting;
