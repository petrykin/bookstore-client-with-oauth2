export const loadData = (url: RequestInfo) => {
  return fetch(url).then(response => response.json());
};