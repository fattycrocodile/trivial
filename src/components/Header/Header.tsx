import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

import { Stack, Title } from "components";

type HeaderVariant = "normal" | "hero";

const variantStyle: Record<HeaderVariant, string> = {
  normal: "",
  hero: "p-4 bg-orange-600 text-white",
};

interface Props {
  title: string;
  variant?: HeaderVariant;
}

const Header: FC<Props> = ({ title, variant = "normal", children }) => (
  <header className={variantStyle[variant]}>
    <Helmet title={title} />
    <Stack variant="sm">
      <Title className="text-center text-lg font-bold">{title}</Title>
      {children}
    </Stack>
  </header>
);

export default Header;
