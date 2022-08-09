import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/general.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import { useState } from "react";
import Novo from "./pages/novo/novo";
import Footer from "./components/footer/footer";

function App() {
  const [user, setUser] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <Router>
      <Header setSidebarActive={setSidebarActive} />

      <Routes>
        <Route
          path="/"
          element={
            <Home user={user} setUser={setUser} sidebarActive={sidebarActive} />
          }
        ></Route>
        <Route
          path="/novo"
          element={
            <Novo user={user} setUser={setUser} sidebarActive={sidebarActive} />
          }
        ></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
