import styled from "styled-components";
import cup from "../img/cup.png"

export default function Ranking(){
    return (
        <Window>
    <TitleStyle>
        <img src={cup} alt="cup" />
       <span>Ranking</span> 
    </TitleStyle>
  <RankingStyle>
    <p>1. Fulaninha - 32 links - 1.703.584 visualizações</p>
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
  background: #FFFFFF;
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 24px 24px 0px 0px;
  p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 28px;
color: #000000;

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
      width: 102px;
    }
    `