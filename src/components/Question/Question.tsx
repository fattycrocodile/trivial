import React, { FC } from "react";

interface Props {
  category: string;
  question: string;
}

const Question: FC<Props> = ({ category, question }) => (
  <div className="mb-40">
    <h1 className="text-md text-gray-700 uppercase">{category}</h1>
    <p className="text-lg font-bold">{question}</p>
  </div>
);

export default Question;
