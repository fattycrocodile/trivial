import React, { FC } from "react";

import { ProgressBar } from "components";

interface Props {
  currentQuestion: number;
  totalQuestions: number;
}

const Progress: FC<Props> = ({ currentQuestion, totalQuestions }) => (
  <div>
    <p>
      Question {currentQuestion} of {totalQuestions}
    </p>
    <ProgressBar current={currentQuestion} maximum={totalQuestions + 1} />
  </div>
);

export default Progress;
