import React from "react";
import { screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderTest from "test/helpers/renderTest";
import Quiz from "./Quiz";

describe("Quiz", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it("show loading indicator", () => {
    renderTest(<Quiz />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(
      screen.queryByText("Entertainment: Video Games")
    ).not.toBeInTheDocument();
  });

  it("show first question", async () => {
    renderTest(<Quiz />);

    await waitFor(() => screen.getByText("Entertainment: Video Games"));

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

    expect(screen.getByText("Entertainment: Video Games")).toBeInTheDocument();
    expect(
      screen.getByText(
        "The retail disc of Tony Hawk's Pro Skater 5 only comes with the tutorial."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Question 1 of 10")).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: "True" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "False" })
    ).not.toBeInTheDocument();
  });

  it("show choices to answer", async () => {
    renderTest(<Quiz />);

    await waitFor(() => screen.getByText("Entertainment: Video Games"));

    await waitFor(() => screen.getByText("True"));

    expect(screen.getByRole("button", { name: "True" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "False" })).toBeInTheDocument();
  });

  it("advances to next question after answering", async () => {
    renderTest(<Quiz />);

    await waitFor(() => screen.getByText("Entertainment: Video Games"));
    await waitFor(() => screen.getByText("True"));

    userEvent.click(screen.getByRole("button", { name: "True" }));

    expect(
      screen.queryByText("Entertainment: Video Games")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Science: Mathematics")).toBeInTheDocument();

    expect(screen.queryByText("Question 1 of 10")).not.toBeInTheDocument();
    expect(screen.getByText("Question 2 of 10")).toBeInTheDocument();
  });
});
