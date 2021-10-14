import { rest } from "msw";

import triviaQuestionsFixture from "./triviaQuestions.fixture.json";

const mockHandlers = [
  rest.get(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
    (_, res, ctx) => res(ctx.json(triviaQuestionsFixture))
  ),
];

export default mockHandlers;
