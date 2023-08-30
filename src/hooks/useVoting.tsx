import { useState } from "react";
import { POSITIVE_STATUS } from "../constants";
const useVoting = () => {
  const [isVoteNowDisabled, setIsVoteNowDisabled] = useState(true);
  const [isPositiveSelected, setisPositiveSelected] = useState<boolean>(false);
  const [isNegativeSelected, setisNegativeSelected] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const handleThumbsClick = (thumb: string) => {
    setIsVoteNowDisabled(false);
    if (thumb === POSITIVE_STATUS) {
      setisPositiveSelected(true);
      setisNegativeSelected(false);
      setSelectedClass("thumbs-up");
    } else {
      setisPositiveSelected(false);
      setisNegativeSelected(true);
      setSelectedClass("thumbs-down");
    }
  };

  const getPercentages = (positive: number, negative: number) => {


    const totalVotes = positive + negative;

    return {
      positive: ((positive/totalVotes)*100).toFixed(1),
      negative: ((negative/totalVotes)*100).toFixed(1),
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
  };
};

export default useVoting;
