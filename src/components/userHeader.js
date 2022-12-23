import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserHeader(props) {

  const navigate = useNavigate()

  function logout() {
    if (!window.confirm("Tem certeza que deseja deslogar?")) {
      return
    }

    const URL = "https://api-shortly-p881.onrender.com/logout"

    axios.delete(URL, props.config)
      .then(res => {
        console.log(res);
        localStorage.removeItem("localToken");
        navigate("/")
      })
      .catch(err => {
        console.log(err);
        alert(err.response.data)
      })
  }

  return (
    <HeaderStyle>
      <span>Seja bem-vindo(a), {props.name}!</span>
      <div>
        <Link to="/inicio">
          <span>Home</span>
        </Link>
        <Link to="/ranking">
          <span>Ranking</span>
        </Link>
          <span onClick={logout}>Sair</span>
      </div>
    </HeaderStyle>
  );
}


const HeaderStyle = styled.div`
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
margin-right: 55%;
cursor: pointer;
  }
  div{
    display: flex;
  }
  `