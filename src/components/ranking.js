import styled from "styled-components";
import cup from "../img/cup.png"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Ranking(){

  const [rankingList, setRankingList] = useState([])

  useEffect(() => {
    const URL = "https://api-shortly-p881.onrender.com/ranking"

    axios.get(URL)
      .then(res => {
        setRankingList(res.data);
      })
      .catch(err => {
        console.log(err);
        alert(err.response.data)
      })
  }, [])

    return (
        <Window>
    <TitleStyle>
        <img src={cup} alt="cup" />
       <span>Ranking</span> 
    </TitleStyle>
  <RankingStyle>
    {rankingList.map((d, i) => <p>{i+1}. {d.name} - {d.linksCount} links - {d.visitCount} visualizações</p>)}
  </RankingStyle>
    </Window>
    )
  }

  const Window = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  `

  const RankingStyle = styled.div`
  width: 1017px;
  margin-top:95px;
  padding-left: 40px;
  padding-top: 6px;
  padding-bottom: 30px;
  background: #FFFFFF;
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 24px 24px 0px 0px;
margin-bottom: 82px;
  p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 28px;
color: #000000;
margin-top: 13px;
  }
  `
    const TitleStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:95px;
    span{
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 45px;
color: #000000;
    }
    img{
      margin-right: 10px;
    }
    `