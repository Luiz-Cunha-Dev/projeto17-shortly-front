import Logo from "../components/logo";
import Ranking from "../components/ranking";
import UserHeader from "../components/userHeader";
import { useEffect } from "react";
import axios from "axios";


export default function RankingPage({token, setUserName, userName}) {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  useEffect(() => {
    loadDatas()
  }, [])

  function loadDatas() {
    const URL = "https://api-shortly-p881.onrender.com/users/me"

    axios.get(URL, config)
      .then(res => {
        setUserName(res.data.name)
      })
      .catch(err => {
        console.log(err);
        alert(err.response.data)
      })
  }

    return (
  <>
  <UserHeader name={userName} config={config}/>
  <Logo/>
  <Ranking/>
  </>
    );
  }