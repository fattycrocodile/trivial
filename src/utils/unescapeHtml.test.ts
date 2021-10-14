import unescapeHtml from "./unescapeHtml";

describe("unescapeHtml", () => {
  it("replaces html entities for readable text", () => {
    const unescaped = unescapeHtml("In &quot;The Sims&quot; series");
    expect(unescaped).toBe('In "The Sims" series');
  });
});
