import React, { FC } from "react";

import { RouteLink } from "Routes";
import { ButtonLink, Content, Header, HeaderImage, Layout } from "components";

import errorHeading from "./errorHeading.svg";

const Error: FC = () => (
  <Layout>
    <Header title="Something went wrong">
      <HeaderImage src={errorHeading} alt="" />
    </Header>
    <Content>
      <p>There was an error on our end, we're sorry about that!</p>
      <p>Click below to do a Trivia Challenge. :)</p>
      <ButtonLink to={RouteLink.Home} reloadPage>
        Go to Trivia Challenge
      </ButtonLink>
    </Content>
  </Layout>
);

export default Error;
