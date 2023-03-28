import { api } from "./api";

export const getHistory = async (setResponse) => {
  const result = await fetch(`${api}/judges/getHistory`)
  .then(data => data.json().then(result => result ))
  .catch(err => err);
  console.log('get history')
  setResponse(result);
}