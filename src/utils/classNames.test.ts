import classNames from "./classNames";

describe("classNames", () => {
  it("concatenates valid strings", () => {
    const valid = true;
    const invalid = false;

    const classes = classNames(
      "p-3 bg-orange-600",
      "grid gap-2",
      valid && "text-center",
      invalid && "flex",
      "cool"
    );

    expect(classes).toBe("p-3 bg-orange-600 grid gap-2 text-center cool");
  });
});
