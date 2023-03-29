import { api } from "./api";

const login = async (values, setResponse) => {
    const result = await fetch(`${api}/judges/login`, {
        method: "POST",
        headers: {
            accepted: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    }).then((data) => data.json().then((result) => result))
    .catch(err => err);
    console.log(result);
    setResponse(result);
};
export default login;
