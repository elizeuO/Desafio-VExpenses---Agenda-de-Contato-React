import ContactField from "../contactField/contactField";

import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import "./contactFieldSet.scss";

function ContactFieldSet({ type, setContactProfile, setInvalidFields, isValidForm }) {
  function switchType() {
    switch (type) {
      case "person":
        return (
          <>
            <div className="c-contact-field-set__heading">
              <FaUserAlt />
              Título:
            </div>

            <ContactField
              type="text"
              name="givenName"
              placeholder="Nome"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
            <ContactField
              type="text"
              name="familyName"
              placeholder="Sobrenome"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
          </>
        );
        break;

      case "email":
        return (
          <>
           <div className="c-contact-field-set__heading">
              <FaEnvelope />
              E-mail:
            </div>

            <ContactField
              type="email"
              name="emailAddress"
              placeholder="E-mail"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
          </>
        );
        break;

      case "phone":
        return (
          <>
           <div className="c-contact-field-set__heading">
              <FaPhoneAlt />
              Telefones:
            </div>

            <ContactField
              type="phone"
              name="phoneNumber"
              placeholder="Telefone"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
          </>
        );
        break;

      case "address":
        return (
          <>
           <div className="c-contact-field-set__heading">
              <FaBuilding />
              Endereços:
            </div>

            <ContactField
              type="text"
              name="streetAddress"
              placeholder="Endereço 1"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
            <ContactField
              type="text"
              name="extendedAddress"
              placeholder="Endereço 2"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
            <ContactField
              type="text"
              name="city"
              placeholder="Cidade"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
            <ContactField
              type="text"
              name="region"
              placeholder="Estado"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
            <ContactField
              type="text"
              name="postalCode"
              placeholder="CEP"
              setContactProfile={setContactProfile}
              setInvalidFields={setInvalidFields}
              isValidForm = {isValidForm}
            />
          </>
        );
        break;

      default:
        break;
    }
  }

  return <div className="c-contact-field-set">{switchType()}</div>;
}

export default ContactFieldSet;
