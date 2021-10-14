import React, { FC, HTMLAttributes } from "react";

const levelStyle = {
  h1: "text-lg text-bold",
  h2: "text-md",
  h3: "text-sm",
};

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  tag?: "h1" | "h2" | "h3";
}

const Title: FC<Props> = ({ tag: Tag = "h1", ...props }) => (
  <Tag className={levelStyle[Tag]} {...props} />
);

export default Title;
