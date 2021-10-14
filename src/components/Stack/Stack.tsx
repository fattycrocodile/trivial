import React, { FC } from "react";

import { classNames } from "utils";

type StackVariant = "sm" | "md";

const variantStyle: Record<StackVariant, string> = {
  sm: "pb-2 gap-2",
  md: "pb-4 gap-4",
};

interface Props {
  fullscreen?: boolean;
  variant: StackVariant;
}

const Stack: FC<Props> = ({ fullscreen, variant, children }) => (
  <div
    className={classNames(
      "w-full flex flex-col",
      variantStyle[variant],
      fullscreen && "h-full"
    )}
  >
    {children}
  </div>
);

export default Stack;
