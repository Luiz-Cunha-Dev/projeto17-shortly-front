import InitialHeader from "../components/initialHeader";
import Logo from "../components/logo";
import styled from "styled-components";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {

  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [button, setButton] = useState("Criar Conta")

  function signup(){
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

    if(name !== "" && email !== "" && password !== "" && password === confirmPassword){
        let signupDatas = {
            name,
            email,
            password,
            confirmPassword
        }

        const URL = "https://api-shortly-p881.onrender.com/signup"

        axios.post(URL, signupDatas)
        .then(res => {
            alert("Cadastrado com sucesso!")
            navigate("/entrar")
            setButton("Cadastrar");
        })
        .catch(err => {
            alert(err.response.data)
            setButton("Cadastrar");
        })
    }else if(password !== confirmPassword){
        alert("Senhas diferentes")
        setButton("Cadastrar");
    }else{
        alert("Todos os campos são necessarios!")
        setButton("Cadastrar");
    }
}

    return (
  <>
  <InitialHeader/>
  <Logo/>
      <DatasSignup>
        <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        <button onClick={signup}>{button}</button>
      </DatasSignup>
  </>
    );
  }

  const DatasSignup = styled.div`
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