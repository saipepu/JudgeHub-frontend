import { api } from "./api"

export const getAllTeams = async (setUnSortedList) => {
  const result = await fetch(`${api}/allTeams/getAll`)
  .then(data => data.json().then(result => result))
  .catch(err => err);
  setUnSortedList(result?.message);
}