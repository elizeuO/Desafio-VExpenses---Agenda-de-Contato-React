import ContactProfile from "../../components/contacts/contactProfile/contactProfile";
import NotLogged from "../../components/notLogged/notLogged";
import Sidebar from "../../components/sidebar/sidebar";

function Contato({user, setUser, sidebarActive}) {
  return (
    <div className="c-container">
      {user ? (
        <div className="l-flex l-flex--negative">
          <Sidebar sidebarActive={sidebarActive} />
          <ContactProfile />
        </div>
      ) : (
        <NotLogged setUser={setUser} />
      )}
    </div>
  );
}

export default Contato;
