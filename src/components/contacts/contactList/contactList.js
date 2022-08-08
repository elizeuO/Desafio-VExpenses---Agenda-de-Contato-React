import { useEffect, useState } from "react";
import ContactItem from "../contactItem/contactItem";

function ContactList() {
  // Add exception for lint
  /* global gapi   google*/

  const [contacts, setContacts] = useState([]);

  const rendered = contacts.length === 0 ? listContacts() : "";

  async function listContacts() {
    let response;
    try {
      response = await gapi.client.people.people.connections.list({
        resourceName: "people/me",
        pageSize: 500,
        personFields: "names,phoneNumbers,emailAddresses",
      });
    } catch (err) {
      console.log("Error getting contact list");
      return;
    }

    const connections = response.result.connections;

    if (!connections || connections.length === 0) {
      console.log("No connections found");
      return;
    }

    console.log(connections);

    // Format result
    const result = connections.map((person) => {
      if (undefined !== person.names  && undefined !== person.phoneNumbers) {
        const name = person.names[0].displayName;
        const phone = person.phoneNumbers[0].value;

        const data = { name: name, phone: phone };

        if(undefined !== person.emailAddresses){
          const email = person.emailAddresses[0].value;
          data.email = email;
        }

        return data;
      }
    });

    const resultSorted = result.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })

  //console.log(resultSorted)
    setContacts(resultSorted );
  }
   

  return (
    <>
      {contacts.length > 0 &&
      contacts.map((contact) => {
        
        if(contact !== undefined){
          return <ContactItem name={contact.name} phone={contact.phone} email={contact.email} />;
        }
      })}
    </>
  );
}

export default ContactList;
