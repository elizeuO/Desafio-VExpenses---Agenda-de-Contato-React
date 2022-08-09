import NewContact from "../../components/contacts/newContact/newContact";
import NotLogged from "../../components/notLogged/notLogged";
import Sidebar from "../../components/sidebar/sidebar";

function Novo({ user, setUser, sidebarActive }) {
  return (
    <div className="c-container">
      {user ? (
        <div className="l-flex l-flex--negative">
          <Sidebar sidebarActive={sidebarActive} />
          <NewContact />
        </div>
      ) : (
        <NotLogged setUser={setUser} />
      )}
    </div>
  );
}

export default Novo;
