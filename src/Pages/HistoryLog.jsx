import React, { useEffect, useState } from 'react'
import { getHistory } from '../api/getHistory';
import styles from '../styles/history.module.css'

const HistoryLog = () => {

  let teamListSeed = [
    {
      name: 'Jelly Bob',
      fund: 0,
      history: "",
    },
    {
      name: 'Fizzle',
      fund: 0,
      history: "",
    },
    {
      name: 'Blizz',
      fund: 0,
      history: "",
    },
    {
      name: 'Kripz',
      fund: 0,
      history: "",
    },
    {
      name: 'Zeri',
      fund: 0,
      history: "",
    },
    {
      name: 'Profries',
      fund: 0,
      history: "",
    },
    {
      name: 'Haly Bake',
      fund: 0,
      history: "",
    },
    {
      name: 'Fragante',
      fund: 0,
      history: "",
    },
    {
      name: 'K\'otton',
      fund: 0,
      history: "",
    },
    {
      name: 'Day One',
      fund: 0,
      history: "",
    },
    {
      name: 'Locomto',
      fund: 0,
      history: "",
    },
    {
      name: 'Let\'s Plant',
      fund: 0,
      history: "",
    },
    {
      name: 'GottaGO',
      fund: 0,
      history: "",
    },
    {
      name: 'Harn',
      fund: 0,
      history: "",
    },
    {
      name: 'Athena',
      fund: 0,
      history: "",
    },
    {
      name: 'Tagme',
      fund: 0,
      history: "",
    },
    {
      name: 'R-ROI',
      fund: 0,
      history: "",
    },
    {
      name: 'Indicat',
      fund: 0,
      history: "",
    },
    {
      name: 'Yeobo',
      fund: 0,
      history: "",
    },
    {
      name: 'Frescas',
      fund: 0,
      history: "",
    },
    {
      name: 'Giadina',
      fund: 0,
      history: "",
    },
    {
      name: 'CoGrow',
      fund: 0,
      history: "",
    },
    {
      name: 'Wastic',
      fund: 0,
      history: "",
    },
  ]

  const [teamList, setTeamList] = useState(teamListSeed);
  const [response, setResponse] = useState();
  const [history, setHistory] = useState();

  useEffect(() => {
    getHistory(setResponse);
  }, [])

  useEffect(() => {
    if(response?.success) {
      let list = response?.history?.split(',');
      let list_1 = [];

      for(let j=0; j<teamListSeed.length; j++) {
        for(let i=0; i<list.length; i++) {
          if(list[i].split(' ')[0] === teamListSeed[j]?.name) {
            teamListSeed[j].history += list[i] + ",";
          }
        }
      }
      setTeamList(teamListSeed)

      setHistory(list_1);
    } else {
      setHistory([{teamName: 'Jelly bob', numberOfTransaction: 2, history: "ddi judge 1 plus 5000000,ddi judge 2 plus 500000"}])
    }
  }, [response])

  console.log(teamList);


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.history_ct}>
          {teamList?.map((item, index) => {
            return (
              <div key={index} className={styles.history}>
                <p className={styles.teamName}>{item?.name}</p>
                <p className={styles.numberOfTransaction}>Number of Transaction - {item?.history.split(",").length - 1}</p>
                <p>Log: </p>
                <div className={styles.log_ct}>
                  {/* {item?.history?.split(',').map((sentence, index) => {
                    return (
                      <p key={index} className={styles.history_sc}>
                          {index+1}. {sentence}
                      </p>
                    )
                  })} */}
                  {item?.history?.split(",").map((item, index) => {
                    return (
                      <div key={index}>
                        {item}
                      </div>
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