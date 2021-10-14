import React, { FC } from "react";

interface Props {
  points: number;
  maximum: number;
}

const Score: FC<Props> = ({ points, maximum }) => (
  <div className="text-center">
    <p>You scored</p>
    <p className="text-2xl text-bold">
      {points}/{maximum}
    </p>
  </div>
);

export default Score;
