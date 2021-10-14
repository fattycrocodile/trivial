import React, { FC, HTMLAttributes } from "react";

import { useLayout } from "components/Layout";
import { classNames } from "utils";

const baseStyle = "font-semibold px-4 py-3 rounded-md text-center";

const variantStyle = {
  primary: "bg-orange-600 hover:bg-orange-800 text-lg text-white",
  secondary:
    "bg-transparent hover:bg-orange-600 hover:text-white text-orange-600 border border-orange-600 hover:border-transparent",
};

export const styles = { baseStyle, variantStyle };

type Props = HTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  const { variant } = useLayout();

  return (
    <button
      className={classNames(baseStyle, variantStyle[variant])}
      {...props}
    />
  );
};

export default Button;
