import React from "react";
import { screen } from "@testing-library/react";

import renderTest from "test/helpers/renderTest";
import Results from "./Results";

describe("Results", () => {
  it("display results from route state", () => {
    const state = {
      answers: [
        { question: "first", correct: true },
        { question: "second", correct: false },
        { question: "third", correct: true },
        { question: "fourth", correct: false },
        { question: "fifth", correct: true },
      ],
      score: 3,
      totalQuestions: 5,
    };

    const route = {
      pathname: "/results",
      state,
    };

    renderTest(<Results />, { routes: [route] });

    screen.getByText("3/5");
  });
});
