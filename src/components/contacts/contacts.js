import { useEffect, useState } from "react";
import ContactItem from "../contactItem/contactItem";

function Contacts() {
  // Add exception for lint
  /* global gapi   google*/

  const [contacts, setContacts] = useState([]);

  const rendered = contacts.length === 0 ? listContactNames() : "";

  console.log("renderizou");

  async function listContactNames() {
    let response;
    try {
      response = await gapi.client.people.people.connections.list({
        resourceName: "people/me",
        pageSize: 500,
        personFields: "names,emailAddresses",
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

    // Format result
    const result = connections.map((person) => {
      if (person.names !== undefined) {
        let name = person.names[0].displayName;
        return name;
      }
    });

    setContacts(result);
  }

  return (
    <>
      {contacts.map((contact) => {
        return <ContactItem name={contact} />;
      })}
    </>
  );
}

export default Contacts;
