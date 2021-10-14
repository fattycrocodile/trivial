import React, { FC } from "react";

import { RouteLink } from "Routes";
import { ButtonLink, Content, Header, HeaderImage, Layout } from "components";

import notFoundHeading from "./notFoundHeading.svg";

const NotFound: FC = () => (
  <Layout>
    <Header title="Page not found">
      <HeaderImage src={notFoundHeading} alt="" />
    </Header>
    <Content>
      <p>The page you're looking for does not exist.</p>
      <p>Click below to do a Trivia Challenge. :)</p>
      <ButtonLink to={RouteLink.Home}>Go to Trivia Challenge</ButtonLink>
    </Content>
  </Layout>
);

export default NotFound;
