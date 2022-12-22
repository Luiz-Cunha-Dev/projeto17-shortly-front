import styled from "styled-components";
import { Link } from "react-router-dom";

export default function InitialHeader() {
    return (
  <HeaderStyle>
    <Link to="/entrar">
    <span>Entrar</span>
    </Link>
    <Link to="/cadastro">
    <span>Cadastrar-se</span>
    </Link>
  </HeaderStyle>
    );
  }
  

  const HeaderStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 78px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 171px;
  span{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #5D9040;
margin-left: 22px;
  }
  div{
    display: flex;
    flex-direction: column;
  }
  `