const fetchJson = (input: RequestInfo, init?: RequestInit) => {
  return fetch(input, init).then((response) => response.json());
};

export default fetchJson;
