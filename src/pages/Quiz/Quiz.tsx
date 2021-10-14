import React, { FC } from "react";

import {
  Answers,
  Card,
  Content,
  Header,
  Layout,
  Progress,
  Question,
} from "components";

import useQuiz from "./useQuiz";

const Quiz: FC = () => {
  const {
    isAnswering,
    question,
    currentQuestion,
    totalQuestions,
    answerQuestion,
  } = useQuiz();

  return (
    <Layout variant="secondary">
      <Header title="Quiz">
        <Progress
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
        />
      </Header>
      <Content>
        <Card>
          <Question category={question.category} question={question.question} />
          {isAnswering && (
            <Answers answers={question.choices} onAnswer={answerQuestion} />
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default Quiz;
