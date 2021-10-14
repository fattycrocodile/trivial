import React, { FC } from "react";

import { RouteLink } from "Routes";
import { ButtonLink, Content, Header, HeaderImage, Layout } from "components";

import quizHeading from "../../assets/images/banner.jpg";

const Home: FC = () => (
  <>
    <div className="header-img"></div>
    <HeaderImage src={quizHeading} alt="" />
    <Header title="Welcome to the Trivia Challenge!"></Header>
    <Layout>
      <Content>
        <p>You will be presented with 10 True or False questions.</p>
        <p className="mb-40">Can you score 100%?</p>
        <ButtonLink to={RouteLink.Quiz}>Begin</ButtonLink>
      </Content>
    </Layout>
  </>
);

export default Home;
