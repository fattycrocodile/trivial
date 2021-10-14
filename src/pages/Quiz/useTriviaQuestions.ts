import { useQuery } from "react-query";

import { fetchJson, unescapeHtml } from "utils";

const TRIVIA_URL = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

interface ApiResult {
  response_code: number;
  results: ApiResultItem[];
}

interface ApiResultItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Question {
  category: string;
  question: string;
  correct_answer: string;
  choices: string[];
}

const getQuestion = (result: ApiResultItem): Question => ({
  category: result.category,
  question: unescapeHtml(result.question),
  correct_answer: result.correct_answer,
  choices: ["True", "False"], // only True/False questions are supported for now
});

const getTriviaQuestions = async () => {
  const data: ApiResult = await fetchJson(TRIVIA_URL);
  const questions = data?.results.map(getQuestion);
  return questions;
};

const useTriviaQuestions = () => {
  const { data = [] } = useQuery("quiz", getTriviaQuestions);

  return data;
};

export default useTriviaQuestions;
