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
    if(response?.success) {
      console.log(response)
      let list = response?.history?.split(',');
      let list_1 = [];
      for(let i=0; i<list.length; i++) {
        if(i !== 0) {
          let arr = list[i].split(" ")
          let obj = {};
          obj.teamName = arr[0];
          obj.judgeName = arr[1];
          obj.action = arr[2];
          obj.fund = arr[3];
          obj.time = arr[4]
          list_1.push(obj);
        }

      }
      setHistory(list_1);
    } else {
      setHistory([{teamName: 'Jelly bob', numberOfTransaction: 2, history: "ddi judge 1 plus 5000000,ddi judge 2 plus 500000"}])
    }
  }, [response])

  console.log(history);

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
                  {item?.history?.split(',').map((sentence, index) => {
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