import {useState } from "react";
import "./contactField.scss";

function ContactField({
  type,
  name,
  placeholder,
  setContactProfile,
  setInvalidFields,
  isValidForm,
}) {
  const [isInvalid, setIsInvalid] = useState(false);
  const classValues = isInvalid ? "c-contact-field invalid" : "c-contact-field";

  function buildContactProfile(input) {
    //Ignore empty fields
    if ("" === input.value) {
      return;
    }

    if (isValidField(input)) {
      setContactProfile((prevState) => {
        //Receive profile object
        let data = prevState;

        //Set property - key (input name) : value (input value)
        data[input.name] = input.value;
        return data;
      });
    }
  }

  function isValidField(input) {
    let isValid = true;

    switch (input.type) {
      case "email":
        if (!input.value.includes(".") || !input.value.includes("@")) {
          isValid = false;
        }
        break;

      default:
        break;
    }

    if (isValid) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }

    manageInvalidFields(input, isValid);
    isValidForm();
    return isValid;
  }

  function manageInvalidFields(input, isValid) {
    setInvalidFields((prevState) => {
      let data = prevState;

      if (isValid) {
        if (data.includes(input.name)) {
          data = data.filter((item) => item !== input.name);
        }
      } else {
        if (!data.includes(input.name)) {
          data.push(input.name);
        }
      }

      return data;
    });
  }

  return (
    <div className={classValues}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(ev) => {
          buildContactProfile(ev.target);
        }}
      />
      {isInvalid && <span>Campo inválido</span>}
    </div>
  );
}

export default ContactField;
