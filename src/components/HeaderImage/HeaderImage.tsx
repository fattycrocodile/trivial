import React, { FC } from "react";

interface Props {
  src: string;
  alt: string;
}

const HeaderImage: FC<Props> = ({ src, alt }) => (
  <div className="flex flex-col items-center">
    <img className="w-100" src={src} alt={alt} />
  </div>
);

export default HeaderImage;
