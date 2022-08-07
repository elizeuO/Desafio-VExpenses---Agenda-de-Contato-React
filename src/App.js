import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./general.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import GoogleLogin from "./components/googleLogin/googleLogin";
import { useState } from "react";

function App() {

  const [user, setUser] = useState();
  
  return (
    <Router>

      <Header />
      <GoogleLogin setUser={setUser}/>

      <Routes>
      <Route path="/" element={<Home user={user} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
