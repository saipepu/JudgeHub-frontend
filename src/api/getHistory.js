import { api } from "./api";

export const getHistory = async (setResponse) => {
  const result = await fetch(`${api}/getHistory`, {
    method: 'GET',
  })
  .then(data => data.json().then(result => result ))
  .catch(err => err);
  setResponse(result);
}