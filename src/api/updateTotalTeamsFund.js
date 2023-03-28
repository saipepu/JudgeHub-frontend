import { api } from "./api"

export const updateTotalTeamsFund = async (values, setResponse) => {
  const result = await fetch(`${api}/allTeams/updateTotalTeamsFund`, {
    method: 'POST',
    headers: {
      accepted: 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(values)
  }).then(data => data.json().then(result => result))
  .catch(err => err);
  console.log(result);
}