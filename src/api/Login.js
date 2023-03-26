import { api } from "./api";

const login = async (values, setResponse) => {
  console.log(values);
  await fetch(`${api}/login`, {
    method: "POST",
    headers: {
      accepted: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values)
  }).then(data => data.json().then(result => setResponse(result)))

}
export default login