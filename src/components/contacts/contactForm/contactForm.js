import { useState } from "react";
import ContactFieldSet from "../contactFieldSet/contactFieldSet";
import "./contactForm.scss";

function ContactForm({ setContactProfile, setDisableButton }) {
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
      />
      <ContactFieldSet
        type="email"
        setContactProfile={setContactProfile}
        setInvalidFields={setInvalidFields}
        isValidForm = {isValidForm}
      />
      <ContactFieldSet
        type="phone"
        setContactProfile={setContactProfile}
        setInvalidFields={setInvalidFields}
        isValidForm = {isValidForm}
      />
      <ContactFieldSet
        type="address"
        setContactProfile={setContactProfile}
        setInvalidFields={setInvalidFields}
        isValidForm = {isValidForm}
      />
    </form>
  );
}

export default ContactForm;
