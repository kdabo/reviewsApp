export const host = 'http://localhost:4000';

export function fetchReviews() {
  const url = `${host}/reviews`;
  console.debug(`GET ${url}`);
  return fetch(url).then(r => r.json());
}
