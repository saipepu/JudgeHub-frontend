import { api } from "../api/api";

export const data = async (setResponse, id) => {
    await fetch(`${api}/getAllTeamForLeaderBoard`, {
        method: "POST",
        headers: {
            accepted: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
    }).then((data) => data.json().then((result) => setResponse(result.team)));
};
