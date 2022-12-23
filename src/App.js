import HomePage from "./pages/homePage";
import InitialPage from "./pages/initialPage";
import RankingPage from "./pages/rankingPage";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

  const localToken = JSON.parse(localStorage.getItem("localToken"));
  const [token, setToken] = useState(localToken);
  const [userName, setUserName] = useState("pessoa");

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/inicio" element={<InitialPage token={token} setUserName={setUserName} userName={userName}/>}/>
  <Route path="/ranking" element={<RankingPage token={token} setUserName={setUserName} userName={userName}/>}/>
  <Route path="/entrar" element={<SignInPage setToken={setToken}/>}/>
  <Route path="/cadastro" element={<SignUpPage/>}/>
</Routes>
</BrowserRouter>
  );
}

