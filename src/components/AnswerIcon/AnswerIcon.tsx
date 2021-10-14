import React, { FC } from "react";

import { classNames } from "utils";

import { ReactComponent as AnsweredCorrectIcon } from "./answeredCorrect.svg";
import { ReactComponent as AnsweredWrongIcon } from "./answeredWrong.svg";

const answerStyle = {
  correct: "bg-green-200 text-green-600",
  wrong: "bg-red-200 text-red-600",
};

interface Props {
  correct: boolean;
}

const AnswerIcon: FC<Props> = ({ correct }) => (
  <div
    className={classNames(
      "inline-block mr-2 rounded-full",
      correct ? answerStyle.correct : answerStyle.wrong
    )}
  >
    {correct ? <AnsweredCorrectIcon /> : <AnsweredWrongIcon />}
  </div>
);

export default AnswerIcon;
