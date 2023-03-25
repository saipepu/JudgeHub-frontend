import React from 'react'
import styles from '../styles/leaderBoard.module.css'
import bgEle1 from '../assets/bgEle1.png'
import bgEle2 from '../assets/bgEle2.png'
import BannerDefault from '../Components/Banner_Default/BannerDefault'
import BannerSecondary from '../Components/Banner_Secondary/BannerSecondary'
import BannerTop1 from '../Components/Banner_Top1/BannerTop1'
import BannerTop3 from '../Components/Banner_Top3/BannerTop3'
import BannerTop10 from '../Components/Banner_Top10/BannerTop10'
import { teamList } from '../data/teamList'

const Leaderboard = () => {
  
  let count = 1;
  let Top10 = [];
  let TheRest = [];
  for(let i=0; i<teamList.length; i++) {
    if(i<10) {
      Top10.push(teamList[i])
    } else {
      TheRest.push(teamList[i])
    }
  }
  console.log(Top10);
  console.log(TheRest);

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
          <div className={styles.sub_title}>
            <p>DDI Investor Pitching</p>
          </div>
          <div className={styles.title}>
            <p>Leaderboard</p>
          </div>
        </div>

        <div className={styles.board_ct}>
          <div className={styles.right}>
            {Top10.map((item, index) => {
              let fund = 0;
              let rank = index + 1;
              if(index !== 0 && Top10[index].fund === Top10[index-1].fund) {
                rank = index + 1 - count;
                count++;
              } else {
                count = 1;
              }
              if(index+1 === 1) {
                return (
                  <BannerTop1 rank={rank} name={item.name} fund={item.fund}/>
                )
              } else if(index+1 <= 3) {
                return (
                  <BannerTop3 rank={rank} name={item.name} fund={item.fund}/>
                )
              } else if(index+1 > 3) {
                return (
                  <BannerTop10 rank={rank} name={item.name} fund={item.fund}/>
                )
              } else if(fund > 0) {
                return (
                  <BannerSecondary rank={rank} name={item.name} fund={item.fund}/>
                )
              } else {
                return (
                  <BannerDefault rank={rank} name={item.name} fund={item.fund}/>
                )
              }
            })}
          </div>
          <div className={styles.left}>
            {TheRest.map((item, index) => {
              let rank = index + 11;
              if(index !== 0 && TheRest[index].fund === TheRest[index-1].fund) {
                rank = rank - count;
                count++;
              } else {
                count = 1;
              }
              if(item.fund > 0) {
                return (
                  <BannerSecondary rank={rank} name={item.name} fund={item.fund}/>
                )
              } else {
                return (
                  <BannerDefault rank={rank} name={item.name} fund={item.fund}/>
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