import InitialHeader from "../components/initialHeader";
import Logo from "../components/logo";
import Ranking from "../components/ranking";
import styled from "styled-components";

export default function HomePage() {
    return (
  <>
  <InitialHeader/>
  <Logo/>
  <Ranking/>
  <Signup>Crie sua conta para usar nosso serviço!</Signup>
  </>
    );
  }
  
const Signup = styled.p`
width: 100%;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 45px;
text-align: center;
color: #000000;
margin-top: 82px;
`
