import ContactFieldSet from "../contactFieldSet/contactFieldSet";
import "./contactForm.scss";

function ContactForm() {
  return (
    <form className="c-form">
        <ContactFieldSet type="person"/>
        <ContactFieldSet type="email"/>
        <ContactFieldSet type="phone"/>
        <ContactFieldSet type="address"/>
    </form>
  );
}

export default ContactForm;
