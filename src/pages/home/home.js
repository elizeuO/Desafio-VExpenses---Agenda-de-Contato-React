import Contacts from "../../components/contacts/contacts";
import ContactsHeader from "../../components/contactsHeader/contactsHeader";
import NotLogged from "../../components/notLogged/notLogged";

function Home({ user, setUser }) {
  return (
    <div className="c-container">
      {user ? (
        <section className="c-section">
          <ContactsHeader />
          <Contacts />
        </section>
      ) : (
        <NotLogged setUser={setUser} />
      )}
    </div>
  );
}

export default Home;
