const unescapeHtml = (htmlText: string) => {
  const dom = new DOMParser().parseFromString(htmlText, "text/html");

  return dom.documentElement.textContent ?? "";
};

export default unescapeHtml;
