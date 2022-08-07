import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./general.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import GoogleLogin from "./components/googleLogin/googleLogin";

function App() {
  
  return (
    <Router>
      <Header />
      <GoogleLogin/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
