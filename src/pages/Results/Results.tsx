import React, { FC } from "react";

import { RouteLink } from "Routes";
import {
  AnswerIcon,
  ButtonLink,
  Card,
  Content,
  Header,
  HeaderImage,
  Layout,
  Score,
  Stack,
} from "components";

import resultsHeading from "../../assets/images/banner.jpg";
import useResults from "./useResults";

const Results: FC = () => {
  const { answers, score, totalQuestions } = useResults();

  return (
    <Layout>
      <Header title="Results">
        <HeaderImage src={resultsHeading} alt="" />
      </Header>
      <Content>
        <Card>
          <Score points={score} maximum={totalQuestions} />
          <Stack variant="sm">
            {answers?.map((answer) => (
              <div key={answer.question}>
                <AnswerIcon correct={answer.correct} />
                {answer.question}
              </div>
            ))}
          </Stack>
        </Card>
        <ButtonLink to={RouteLink.Home}>Try again?</ButtonLink>
      </Content>
    </Layout>
  );
};

export default Results;
