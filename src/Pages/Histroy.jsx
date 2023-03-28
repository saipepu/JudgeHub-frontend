import React, { useEffect, useState } from 'react'
import { getAllTeams } from '../api/getAllTeams';
import styles from '../styles/history.module.css'

const HistoryLog = () => {

  const [response, setResponse] = useState();
  const [history, setHistory] = useState();

  useEffect(() => {
    getAllTeams(setResponse);
  }, [])

  useEffect(() => {
    if(response) {
      setHistory(response);
    }
  }, [response])

  // console.log(history);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.history_ct}>
          {history?.map((item, index) => {
            return (
              <div key={index} className={styles.history}>
                <p className={styles.teamName}>{item?.name}</p>
                <p className={styles.numberOfTransaction}>Number of Transaction - {item?.numberOfTransaction}</p>
                <p>Log: </p>
                <div className={styles.log_ct}>
                  {item?.history.split(',').map((sentence, index) => {
                    if(sentence !== '') {
                      return (
                        <p key={index} className={styles.history_sc}>
                            {index+1}. {sentence}
                        </p>
                      )
                    }
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