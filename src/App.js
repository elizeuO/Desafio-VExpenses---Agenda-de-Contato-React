import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/general.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import GoogleLogin from "./components/googleLogin/googleLogin";
import { useState } from "react";

function App() {

  const [user, setUser] = useState();
  
  return (
    <Router>

      <Header />
      

      <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
