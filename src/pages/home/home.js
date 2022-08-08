import ContactsWrapper from "../../components/contacts/contactsWrapper/contactsWrapper";
import NotLogged from "../../components/notLogged/notLogged";
import Sidebar from "../../components/sidebar/sidebar";

function Home({ user, setUser }) {
  return (
    <div className="c-container">
      {user ? (
        <div className="l-flex">
        <Sidebar />
        <section className="c-section">
          <ContactsWrapper />
        </section>
        </div>
      ) : (
        <NotLogged setUser={setUser} />
      )}
    </div>
  );
}

export default Home;
