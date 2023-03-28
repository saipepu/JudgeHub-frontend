import { api } from "./api"

export const updateJudgeFund = async(id, values) => {
  const result = await fetch(`${api}/judges/updateTeamFund/${id}`, {
    method: 'PUT',
    headers: {
      accepted: 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(values)
  }).then(data => data.json().then(result => result))
  .catch(err => err);
}