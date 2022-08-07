import Contact from "../../components/contact/contact";
import NotLogged from "../../components/notLogged/notLogged";

function Home({user, setUser}) {
  return (
    
      <>
      {user ?
      <Contact/>
      : 
      <NotLogged setUser={setUser}/>
      }

    </>
    
  );
}

export default Home;
