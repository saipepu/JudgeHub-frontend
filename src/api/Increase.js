import { api } from "./api";

const Increase = async (values, setResponse) => {
    console.log(values);
    try {
        const result = await fetch(`${api}/judge/updateJudge`, {
            method: "PUT",
            headers: {
                accepted: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        }).then((data) => data.json());
        setResponse(result);
    } catch (err) {
        console.error(err);
    }
};

export default Increase;
