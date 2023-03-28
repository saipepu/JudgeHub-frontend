import React, { useEffect, useState } from 'react'
import { getHistory } from '../api/getHistory';
import styles from '../styles/history.module.css'

const HistoryLog = () => {

  const [response, setResponse] = useState();
  const [history, setHistory] = useState();

  useEffect(() => {
    getHistory(setResponse);
  }, [])

  useEffect(() => {
    console.log(response);  
    if(response?.success) {
      setHistory(response.message);
    } else {
      setHistory([{teamName: 'Jelly bob', numberOfTransaction: 2, history: "ddi judge 1 plus 5000000,ddi judge 2 plus 500000"}])
    }
  }, [response])


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.history_ct}>
          {history?.map((item, index) => {
            return (
              <div key={index} className={styles.history}>
                <p className={styles.teamName}>{item?.teamName}</p>
                <p className={styles.numberOfTransaction}>Number of Transaction - {item?.numberOfTransaction}</p>
                <p>Log: </p>
                <div className={styles.log_ct}>
                  {item?.history.split(',').map((sentence, index) => {
                    return (
                      <p key={index} className={styles.history_sc}>
                          {index+1}. {sentence}
                      </p>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HistoryLog