import ContactList from "../contactList/contactList";
import ContactsHeader from "../contactsHeader/contactsHeader";

function ContactsWrapper() {
  return <section className="c-section">
    <ContactsHeader />
    <ContactList />
    
  </section>;
}

export default ContactsWrapper;
