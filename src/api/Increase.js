import { api } from "./api";

const Increase = async (values, setResponse) => {
  console.log(values);
  const result = await fetch(`${api}/plus/${values.id}`, {
    method: "PUT",
    headers: {
      accepted: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  }).then(data => data.json().then(result => result))
  .catch(err => err);
  setResponse(result);
}
export default Increase;