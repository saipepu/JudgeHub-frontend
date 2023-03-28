import React, { useEffect, useState } from "react";
import styles from "../styles/scoringPage.module.css";
import { ddiDollar, filterIcon } from "../assets/svg";
import bgEle1 from "../assets/bgEle1.png";
import TeamScore from "../Components/TeamScore/TeamScore";
import { NumberToString } from "../Functions/NumberToString";
import { useLocation, useParams } from "react-router-dom";
import { getJudge } from "../api/getOneJudge";

const ScoringPage = () => {

  const { id } = useParams();
  const [judge, setJudge] = useState();
  const [investorFund, setInvestorFund] = useState("");
  const [response, setResponse] = useState();
  const [teamList, setTeamList] = useState([]);
  const [teamSort, setTeamSort] = useState();
  const [trigger, setTrigger] = useState(true);
  const [sortMethod, setSortingMethod] = useState(localStorage.getItem('ddi-team-sorting-order'))
  const [option, setOption] = useState(false);

  useEffect(() => {
    getJudge(id, setResponse);
  }, [id])
  
  useEffect(() => {
    if(response?.success) {
      setJudge(response.message);
      setTeamList(response.message.teamList);
      setTeamSort(response.message.teamList);
    }
  }, [response])

  useEffect(() => {
    if(judge){
      console.log(judge);
      setInvestorFund(judge?.totalFund)
    } else {
      setInvestorFund('0')
    }
  }, [judge])

  const handleChangeSort = (action) => {
    let fundSort = [];
    let orderSort = [];
    for(let i=0; i<teamList?.length; i++) {
      let id = teamList[i].id;
      let name = teamList[i].teamName;
      let fundStr = teamList[i].fund?.toString();
      let fund = parseInt(fundStr.split(',').join(''));
      fundSort.push({id: id, teamName: name, fund: fund})
      fundSort.sort((a,b) => b.fund - a.fund);
      orderSort.push({id: id, teamName: name, fund: fund})
      console.log(fundSort)
      console.log(orderSort)
    }
    if(action === 'Pitching Order') {
      localStorage.setItem('ddi-team-sorting-order', 'Pitching Order')
      setSortingMethod('Pitching Order');
      setTeamSort(orderSort)
    } else {
      localStorage.setItem('ddi-team-sorting-order', 'Funding')
      setSortingMethod('Funding');
      setTeamSort(fundSort)
    }
  }

    return (
        <>
            <div className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.bgEle1}>
                <img src={bgEle1} alt="bgEle1" />
            </div>
            <div className={styles.bgEle1_1}>
                <img src={bgEle1} alt="bgEle1" />
            </div>
            <div className={styles.header_ct}>
                <div className={styles.sorting_ct}>
                    <p className={styles.title}>DDI Investor Pitching</p>
                    <div className={styles.sorting} onClick={() => setOption(!option)}>
                    <p>Sort By</p>
                    <div dangerouslySetInnerHTML={{ __html: filterIcon }} className={styles.filterIcon}></div>
                    {option ? (
                        <div className={styles.option_ct}>
                        {/* {sortMethod !== 'Pitching Order' ? ( */}
                            <div className={styles.options} onClick={() => handleChangeSort('Funding')}>Funding</div>
                        {/* ) : ( */}
                            <div className={styles.options} onClick={() => handleChangeSort('Pitching Order')}>Pitching Order</div>
                        {/* )} */}
                        </div>
                    ) : ( " ")}
                    </div>
                </div>
                <div className={styles.header}>
                {/* NAME */}
                <div className={styles.name_ct}>
                    <p>{judge?.name}</p>
                </div>
                {/* AVAILABLE FUND */}
                <div className={styles.available_fund_ct}>
                    <p className={styles.caption}>Available Funding</p>
                    <div className={styles.fund}>
                    <p className={styles.money}>{NumberToString(investorFund)}</p>
                    <div className={styles.ddi_dollar} dangerouslySetInnerHTML={{ __html: ddiDollar}} ></div>
                    </div>
                    <div className={styles.sorting} onClick={() => setOption(!option)}>
                    <p>Sort By {sortMethod}</p>
                    <div dangerouslySetInnerHTML={{ __html: filterIcon }} className={styles.filterIcon}></div>
                    {option ? (
                        <div className={styles.option_ct}>
                        {/* {sortMethod !== 'Pitching Order' ? ( */}
                            <div className={styles.options} onClick={() => handleChangeSort('Funding')}>Funding</div>
                        {/* ) : ( */}
                            <div className={styles.options} onClick={() => handleChangeSort('Pitching Order')}>Pitching Order</div>
                        {/* )} */}
                        </div>
                    ) : ( " ")}
                    </div>

                </div>
                {/* SORTING */}
                </div>
            </div>

            {/* TEAMS */}
            <div className={styles.teams_ct}>
                {teamSort?.map((item, index) => {
                return (
                    <TeamScore key={index} id={judge._id} name={item.name} fund={item.fund} investorFund={investorFund} setInvestorFund={setInvestorFund} trigger={trigger} setTrigger={setTrigger} />
                )
                })}
            </div>
            </div>  
            </div>
        </>
    );
};

export default ScoringPage;
