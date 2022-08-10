import { useState } from "react";
import ContactForm from "../contactForm/contactForm";

// Add exception for lint
/* global gapi   google*/

function NewContact() {

  const [contactProfile, setContactProfile] = useState({});
  const [disableButton, setDisableButton] = useState(true);

  function isButtonDisabled(){
   return  disableButton ? true: false;
  }

  async function createContact() {
    console.log(contactProfile);
     let response;
     try {
       response = await gapi.client.people.people.createContact({
         resource: {
           names: {
             givenName: contactProfile.givenName,
             familyName: contactProfile.familyName,
           },
           emailAddresses: {
             value: contactProfile.emailAddress,
           },
           phoneNumbers: [
             {
              value: contactProfile.phoneNumber,
             },
           ],
           addresses: 
            {
              streetAddress: contactProfile.streetAddress,
              extendedAddress: contactProfile.extendedAddress,
              postalCode: contactProfile.postalCode,
              city: contactProfile.city,
              region: contactProfile.region,
            },
         },
       });
     } catch (err) {
       console.log("Error creating contact ");
       return;
     }

     console.log(response)
  }

  return (
    <main className="c-main">
      <h2>Novo contato</h2>

      <button className="c-button" onClick={createContact} disabled={isButtonDisabled()}>
        Salvar
      </button>

      <ContactForm setContactProfile = {setContactProfile} setDisableButton={setDisableButton}/>
    </main>
  );
}

export default NewContact;
