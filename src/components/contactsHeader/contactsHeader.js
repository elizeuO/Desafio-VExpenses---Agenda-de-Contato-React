import ContactsHeaderItem from "../contactsHeaderItem/contactsHeaderItem";
import './contactsHeader.scss';

function ContactsHeader() {
  return <div className="c-contacts-header">
    <div className="l-flex l-flex--center l-flex--negative">
       <ContactsHeaderItem title="Nome"/>
       <ContactsHeaderItem title="Telefone"/>
       <ContactsHeaderItem title="E-mail"/>
    </div>
  </div>;
}
export default ContactsHeader;
