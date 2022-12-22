import HomePage from "./pages/homePage";
import InitialPage from "./pages/initialPage";
import RankingPage from "./pages/rankingPage";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/inicio" element={<InitialPage/>}/>
  <Route path="/ranking" element={<RankingPage/>}/>
  <Route path="/entrar" element={<SignInPage/>}/>
  <Route path="/cadastro" element={<SignUpPage/>}/>
</Routes>
</BrowserRouter>
  );
}

