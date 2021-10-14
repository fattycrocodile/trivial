import React, { FC } from "react";

const getPercent = (current: number, maximum: number) => {
  const percent = (current / maximum) * 100;
  return `${percent}%`;
};

interface Props {
  current: number;
  maximum: number;
}

const ProgressBar: FC<Props> = ({ current, maximum }) => (
  <div className="bg-orange-200 h-2 rounded-md relative overflow-hidden">
    <div
      className="h-full absolute bg-purple-800"
      style={{ width: getPercent(current, maximum) }}
    />
  </div>
);

export default ProgressBar;
