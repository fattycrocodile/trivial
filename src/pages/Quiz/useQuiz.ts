import { useHistory } from "react-router-dom";

import { RouteLink } from "Routes";

import useTriviaQuestions from "./useTriviaQuestions";
import useQuizState from "./useQuizState";
import { useEffect } from "react";

const useQuiz = () => {
  const questions = useTriviaQuestions();
  const [current, send] = useQuizState(questions);
  const history = useHistory();

  // compute information to return about the quiz state
  const { currentIndex } = current.context;
  const question = current.context.questions[currentIndex];
  const currentQuestion = currentIndex + 1;
  const totalQuestions = questions.length;

  // allow interactions with the quiz state
  const isAnswering = current.matches("question.answering");
  const answerQuestion = (answer: string) => send({ type: "ANSWER", answer });

  // redirect to results page with the score on route state
  useEffect(() => {
    if (current.matches("end")) {
      const answers = current.context.questions.map((question) => ({
        question: question.question,
        correct: question.user_answer === question.correct_answer,
      }));
      const score = answers.filter((answer) => answer.correct).length;

      history.push(RouteLink.Results, { answers, score, totalQuestions });
    }
  }, [current, totalQuestions, history]);

  return {
    isAnswering,
    question,
    currentQuestion,
    totalQuestions,
    answerQuestion,
  };
};

export default useQuiz;
