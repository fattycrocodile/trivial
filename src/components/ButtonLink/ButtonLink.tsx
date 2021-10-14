import React, { FC, RefAttributes } from "react";
import { Link } from "react-router-dom";

import { styles } from "components/Button";
import { useLayout } from "components/Layout";
import { classNames } from "utils";

interface Props extends RefAttributes<HTMLAnchorElement> {
  to: string;
  reloadPage?: boolean;
}

const ButtonLink: FC<Props> = ({ reloadPage, ...props }) => {
  const { variant } = useLayout();
  const { baseStyle, variantStyle } = styles;
  const target = reloadPage ? "_top" : "";

  return (
    <Link
      className={classNames(baseStyle, variantStyle[variant])}
      target={target}
      {...props}
    />
  );
};

export default ButtonLink;
