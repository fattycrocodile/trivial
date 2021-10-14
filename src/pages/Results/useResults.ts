import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { RouteLink } from "Routes";

interface RouteState {
  answers: Answer[];
  score: number;
  totalQuestions: number;
}

interface Answer {
  question: string;
  correct: boolean;
}

const useResults = () => {
  const { state } = useLocation<RouteState>();
  const history = useHistory();

  useEffect(() => {
    if (!state) {
      history.push(RouteLink.Home);
    }
  }, [state, history]);

  // assign safe defaults to simplify interaction
  const { answers = [], score, totalQuestions } = state || {};

  return { answers, score, totalQuestions };
};

export default useResults;
