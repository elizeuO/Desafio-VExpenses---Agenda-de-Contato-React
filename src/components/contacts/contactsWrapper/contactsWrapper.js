import ContactList from "../contactList/contactList";
import ContactsHeader from "../contactsHeader/contactsHeader";

function ContactsWrapper() {
  return <main className="c-main">
    <ContactsHeader />
    <ContactList />
    
  </main>;
}

export default ContactsWrapper;
