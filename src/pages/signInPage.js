import InitialHeader from "../components/initialHeader";
import Logo from "../components/logo";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios";

export default function SignInPage({setToken}) {

  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [button, setButton] = useState("Entrar")

  function signin(){
    setButton(<ThreeDots
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    />)   

    if(email !== "" && password !== ""){
        let signinDatas = {
            email,
            password
        }

        const URL = "https://api-shortly-p881.onrender.com/signin"

        axios.post(URL, signinDatas)
        .then(res => {
          localStorage.removeItem("localToken");
          localStorage.setItem("localToken", JSON.stringify(res.data.token));
            console.log(res.data.token);
            setToken(res.data.token)
            navigate("/inicio")
            setButton("Entrar");
        })
        .catch(err => {
            alert(err.response.data)
            setButton("Entrar");
        })
    }else{
        alert("Todos os campos são necessarios!")
        setButton("Entrar");
    }
}

  return (
    <>
      <InitialHeader />
      <Logo />
      <DatasSignin>
        <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={signin}>{button}</button>
      </DatasSignin>
    </>
  );
}

const DatasSignin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  input{
    width: 769px;
height: 60px;
background: #FFFFFF;
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 12px;
margin-bottom: 25px;
padding-left: 21px;
  }
  button{
    width: 182px;
height: 60px;
background: #5D9040;
border-radius: 12px;
border: thin;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-top: 45px;
  }
  `