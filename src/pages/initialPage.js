import UserHeader from "../components/userHeader";
import Logo from "../components/logo";
import styled from "styled-components";
import trash from "../img/trash.png"
import { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'

export default function InitialPage({ token, setUserName, userName }) {

  const [shortenedUrls, setShortenedUrls] = useState([])
  const [url, setUrl] = useState("")
  const [button, setButton] = useState("Encurtar link")
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
        setShortenedUrls(res.data.shortenedUrls);
        setUserName(res.data.name)
      })
      .catch(err => {
        console.log(err);
        alert(err.response.data)
      })
  }

  function sendUrl(){
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

    if(url !== ""){

        const URL = "https://api-shortly-p881.onrender.com/urls/shorten"

        axios.post(URL, {url}, config)
        .then(res => {
            setButton("Encurtar link");
            setUrl("")
            loadDatas()
        })
        .catch(err => {
            alert(err.response.data)
            setButton("Encurtar link");
        })
    }else{
        alert("Insira um link para continuar!")
        setButton("Encurtar link");
    }
}

function deleteUrl(id){
    if(!window.confirm("Tem certeza que deseja deletar esse link?")){
return
    }

    const URL = `https://api-shortly-p881.onrender.com/urls/${id}`

    axios.delete(URL, config)
    .then(res => {
        loadDatas()
    })
    .catch(err => {
        alert(err.response.data)
    })

}


  return (
    <>
      <UserHeader name={userName} config={config}/>
      <Logo />
      <InsertLink>
        <input type="text" placeholder="Links que cabem no bolso" value={url} onChange={e => url === "" ? setUrl(`https://${e.target.value}`) : setUrl(e.target.value)}/>
        <button onClick={sendUrl}>{button}</button>
      </InsertLink>
      {shortenedUrls.map((d, i) => <CreatedLink link={`https://api-shortly-p881.onrender.com/urls/open/${d.shortUrl}`} key={i} url={d.url} shortenedUrl={d.shortUrl} visitCount={d.visitCount} deleteFunction={() => deleteUrl(d.id)}/>)}
    </>
  );
}

function CreatedLink(props) {
  return (
    <ShortenedLinks>
      <a href={props.link}>
      <div><span>{props.url}</span><span>{props.shortenedUrl}</span><span>Quantidade de visitantes: {props.visitCount}</span></div>
      </a>
      <button onClick={props.deleteFunction}><img src={trash} alt="trash" /></button>
    </ShortenedLinks>
  )
}

const InsertLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 130px;
  margin-bottom: 59px;
  input{
    width: 769px;
height: 60px;
background: #FFFFFF;
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 12px;
margin-bottom: 25px;
margin-right: 69px;
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
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
  }
  `

const ShortenedLinks = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 42px;
div{
  width: 887px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
background: #80CC74;
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 12px 0px 0px 12px;
padding-left: 21px;
padding-right: 94px;
}
span{
  font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
}
span:nth-child(1){
width: 200px;
overflow: hidden;
}
button{
  cursor: pointer;
  width: 130px;
height: 60px;
border-width: 2px;
border-color: rgba(120, 177, 89, 0.12);
background: #FFFFFF;
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 0px 12px 12px 0px;
}
`