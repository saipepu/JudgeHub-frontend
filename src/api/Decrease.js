import { api } from "./api";

const Decrease = async (values, setResponse) => {
    const result = await fetch(`${api}/judge/updateJudge`, {
        method: "PUT",
        headers: {
            accepted: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    }).then((data) => data.json());
    console.log(result);
    setResponse(result);
};
export default Decrease;
