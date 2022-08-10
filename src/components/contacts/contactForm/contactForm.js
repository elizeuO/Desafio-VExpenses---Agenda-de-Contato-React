import { useState } from "react";
import ContactFieldSet from "../contactFieldSet/contactFieldSet";
import "./contactForm.scss";

function ContactForm({ setContactProfile, setDisableButton, setContactCreated }) {
  const [invalidFields, setInvalidFields] = useState([]);

  function isValidForm() {
    if (invalidFields.length > 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }
  return (
    <form className="c-form">
      <ContactFieldSet
        type="person"
        setContactProfile={setContactProfile}
        setInvalidFields={setInvalidFields}
        isValidForm = {isValidForm}
        setContactCreated={setContactCreated}
      />
      <ContactFieldSet
        type="email"
        setContactProfile={setContactProfile}
        setInvalidFields={setInvalidFields}
        isValidForm = {isValidForm}
        setContactCreated={setContactCreated}
      />
      <ContactFieldSet
        type="phone"
        setContactProfile={setContactProfile}
        setInvalidFields={setInvalidFields}
        isValidForm = {isValidForm}
        setContactCreated={setContactCreated}
      />
      <ContactFieldSet
        type="address"
        setContactProfile={setContactProfile}
        setInvalidFields={setInvalidFields}
        isValidForm = {isValidForm}
        setContactCreated={setContactCreated}
      />
    </form>
  );
}

export default ContactForm;
