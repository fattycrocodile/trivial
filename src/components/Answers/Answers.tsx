import React, { FC } from "react";

import { Button } from "components";

interface Props {
  answers: string[];
  onAnswer: (answer: string) => void;
}

const Answers: FC<Props> = ({ answers, onAnswer }) => (
  <>
    {answers.map((answer) => (
      <Button key={answer} onClick={() => onAnswer(answer)}>
        {answer}
      </Button>
    ))}
  </>
);

export default Answers;
