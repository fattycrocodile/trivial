import React, { FC } from "react";
import { classNames } from "utils";

import { Stack } from "components";
import { useLayout } from "components/Layout";

const variantStyle = {
  primary: "bg-orange-600 text-white",
  secondary: "bg-white text-black",
};

const Card: FC = ({ children }) => {
  const { variant } = useLayout();

  return (
    <div
      className={classNames(
        "h-full p-3 rounded-lg shadow-xl overflow-hidden break-words",
        variantStyle[variant]
      )}
    >
      <Stack variant="md">{children}</Stack>
    </div>
  );
};

export default Card;
