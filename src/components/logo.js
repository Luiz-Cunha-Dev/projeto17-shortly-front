import styled from "styled-components";
import icon from "../img/shortly-icon.png"

export default function Logo(){
    return (
  <LogoStyle>
    <span>Shortly</span>
    <img src={icon} alt="icon" />
  </LogoStyle>
    );
  }

  const LogoStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:95px;
  span{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 200;
font-size: 64px;
line-height: 80px;
color: #000000;

  }
  img{
    width: 102px;
  }
  `