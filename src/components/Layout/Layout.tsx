import React, { createContext, FC, useContext } from "react";
import { Helmet } from "react-helmet-async";

import { Stack } from "components";
import { classNames } from "utils";

import useScrollToTop from "./useScrollToTop";
import "./tailwind.css";

type LayoutVariant = "primary" | "secondary";

interface ContextProps {
  variant: LayoutVariant;
}

const LayoutContext = createContext<ContextProps>({
  variant: "primary",
});

const variantStyle = {
  primary: "bg-white text-black",
  secondary: "bg-orange-600 text-white",
};

interface Props {
  variant?: LayoutVariant;
}

const Layout: FC<Props> = ({ variant = "primary", children }) => {
  useScrollToTop();

  return (
    <LayoutContext.Provider value={{ variant }}>
      <Helmet title="Trivia Challenge" titleTemplate="%s - Trivia Challenge" />
      <div className={classNames("h-screen p-4", variantStyle[variant])}>
        <div className="m-auto max-w-screen-sm">
          <Stack variant="md">{children}</Stack>
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const state = useContext(LayoutContext);

  return state;
};

export default Layout;
