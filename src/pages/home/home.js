import ContactsWrapper from "../../components/contacts/contactsWrapper/contactsWrapper";
import NotLogged from "../../components/notLogged/notLogged";
import Sidebar from "../../components/sidebar/sidebar";

function Home({ user, setUser, sidebarActive }) {
  return (
    <div className="c-container">
      {user ? (
        <div className="l-flex l-flex--negative">
          <Sidebar sidebarActive={sidebarActive} />
          <ContactsWrapper />
        </div>
      ) : (
        <NotLogged setUser={setUser} />
      )}
    </div>
  );
}

export default Home;
