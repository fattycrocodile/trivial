import fetchJson from "./fetchJson";

import triviaQuestionsFixture from "test/mocks/triviaQuestions.fixture.json";

const TRIVIA_URL = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

describe("fetchJson", () => {
  it("fetches data from url", async () => {
    const data = await fetchJson(TRIVIA_URL);
    expect(data).toEqual(triviaQuestionsFixture);
  });
});
