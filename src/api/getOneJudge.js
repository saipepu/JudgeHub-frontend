import { api } from "./api"

export const getJudge = async (id, setResponse) => {
  console.log(id);
  const response = await fetch(`${api}/getJudge/${id}`, {
    method: "GET",
    headers: {
        accepted: "application/json",
        "Content-Type": "application/json",
    }
  }).then(data => data.json().then(result => result))
  .catch(error => error)
  setResponse(response);
}