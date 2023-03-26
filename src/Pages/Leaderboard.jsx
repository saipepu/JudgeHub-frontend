import React, { useEffect, useState } from 'react'
import styles from '../styles/leaderBoard.module.css'
import bgEle1 from '../assets/bgEle1.png'
import bgEle2 from '../assets/bgEle2.png'
import BannerDefault from '../Components/Banner_Default/BannerDefault'
import BannerSecondary from '../Components/Banner_Secondary/BannerSecondary'
import BannerTop1 from '../Components/Banner_Top1/BannerTop1'
import BannerTop3 from '../Components/Banner_Top3/BannerTop3'
import BannerTop10 from '../Components/Banner_Top10/BannerTop10'
import { data } from '../data/teamList'
import { NumberToString } from '../Functions/NumberToString'

const Leaderboard = () => {

  const [teamList, setTeamList] = useState([]);

  // useEffect(() => {
  //   const socket = new WebSocket('ws://localhost:4002');

  //   socket.addEventListener('open', function (event) {
  //     console.log('Connected to WebSocket server')
  //   })

    // socket.addEventListener('close', function (event) {
    //   console.log('Disconnected from WebSocket server')
    // })

    // socket.addEventListener('message', function (event) {
    //   console.log('Received message:', event.data);
      
    //   while(socket.readyState === WebSocket.OPEN) {
    //     socket.send('Message received');
    //     break;
    //   }
    // })
    // return () => {
    //   socket.close();
    // }
  // }, [])f

  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    data(setTeamList);
    setTimeout(() => {
      console.log('hi')
      setTrigger(!trigger);
    }, 2000)
  }, [trigger])

  if(teamList?.length > 0) {
    teamList?.sort((a,b) => b - a)
  }

  let count = 1;
  let Top10 = [];
  let TheRest = [];
  for(let i=0; i<teamList?.length; i++) {
    teamList[i].amountStr = NumberToString(teamList[i].amount);
    if(i!==0) {
      if(teamList[i].amount === teamList[i-1].amount) {
        teamList[i].rank = i + 1 - count;
        count++;
      } else {
        teamList[i].rank = i + 1;
        count = 1;
      }
    } else {
      teamList[i].rank = 1;
    }
    if(i<10) {
      Top10.push(teamList[i])
    } else {
      TheRest.push(teamList[i])
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* background element */}
          <div className={styles.bgEle1}>
            <img src={bgEle1} alt="bgEle1" />
          </div>
          <div className={styles.bgEle1_1}>
            <img src={bgEle1} alt="bgEle1" />
          </div>
          <div className={styles.bgEle2}>
            <img src={bgEle2} alt="bgEle2" />
          </div>

        {/* board */}
        <div className={styles.header}>
          {/* <div className={styles.sub_title}>
            <p>DDI Investor Pitching</p>
          </div> */}
          <div className={styles.title}>
            <p>DDI Investor Pitching Leaderboard</p>
          </div>
        </div>

        <div className={styles.board_ct}>
          <div className={styles.right}>
            {Top10.map((item, index) => {
              if(item.amount === 0) {
                return (
                  <BannerDefault key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              } else if(item.rank === 1) {
                return (
                  <BannerTop1 key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              } else if(item.rank <= 3) {
                return (
                  <BannerTop3 key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              } else if(item.rank <= 10) {
                return (
                  <BannerTop10 key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              } else {
                return (
                  <BannerSecondary key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              }
            })}
          </div>
          <div className={styles.left}>
            {TheRest.map((item, index) => {
              if(item.amount === 0) {
                return (
                  <BannerDefault key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              } else if(item.rank === 1) {
                return (
                  <BannerTop1 key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              } else if(item.rank <= 3) {
                return (
                  <BannerTop3 key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              } else if(item.rank <= 10) {
                return (
                  <BannerTop10 key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              } else {
                return (
                  <BannerSecondary key={index} name={item.name} fund={item.amountStr} rank={item.rank} />
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard