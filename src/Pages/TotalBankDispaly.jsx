import React, { useState, useEffect } from "react";
import { api } from "../api/api";

function TotalBankDisplay({ onTotalBankFetched, id }) {
    const [totalBank, setTotalBank] = useState(0);

    useEffect(() => {
        const fetchTotalBank = async () => {
            const response = await fetch(`${api}/getJudge/${id}`, {
                method: "GET",
                headers: {
                    accepted: "application/json",
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setTotalBank(data.judge.totalBank);

            onTotalBankFetched(data.judge.totalBank);
        };

        fetchTotalBank();
    }, [onTotalBankFetched, id]);

    return <div>Total bank: {totalBank}</div>;
}

export default TotalBankDisplay;
