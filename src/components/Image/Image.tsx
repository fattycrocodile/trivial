import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
  alt: string;
}

const Image: FC<Props> = ({ alt, ...props }) => <img alt={alt} {...props} />;

export default Image;
