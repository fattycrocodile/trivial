import React from "react";
import { screen } from "@testing-library/react";

import renderTest from "test/helpers/renderTest";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  it("renders error boundary", () => {
    // avoid the expected error to be logged to the console for a cleaner log
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    const BadComponent = () => {
      throw new Error("Oopsie");
    };

    renderTest(
      <ErrorBoundary>
        <BadComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    spy.mockRestore();
  });

  it("renders children normally", () => {
    const GoodComponent = () => <div>Good component renders</div>;

    renderTest(
      <ErrorBoundary>
        <GoodComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Good component renders")).toBeInTheDocument();
    expect(screen.queryByText("Something went wrong")).not.toBeInTheDocument();
  });
});
