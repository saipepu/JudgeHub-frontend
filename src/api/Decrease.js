import { api } from "./api";

const Decrease = async (values, setResponse) => {
  const result = await fetch(`${api}/minus/${values.id}`, {
    method: "PUT",
    headers: {
      accepted: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  }).then(data => data.json().then(result => result))
  .catch(err => err);
  setResponse(result)

}
export default Decrease;