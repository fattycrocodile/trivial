import React, { FC } from "react";

import { Content, Title } from "components";

import styles from "./Loader.module.css";

const Loader: FC = () => (
  <div className="fixed top-0 left-0 w-screen h-screen pb-32 flex flex-col justify-center items-center gap-8 bg-orange-600 text-white">
    <header>
      <Title>Trivia Challenge</Title>
    </header>
    <Content>
      <div className={styles.loader}>
        <span />
      </div>
    </Content>
  </div>
);

export default Loader;
