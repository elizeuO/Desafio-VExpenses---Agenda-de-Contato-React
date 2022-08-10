import { useEffect, useState } from "react";
import ContactsHeader from "../contactsHeader/contactsHeader";
import ContactItem from "../contactItem/contactItem";

// Add exception for lint
/* global gapi   google*/

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [notLoadedMessage, setNotLoadedMessage] = useState('Carregando...');

  const rendered = contacts.length === 0 ? listContacts() : "";

  async function listContacts() {
    let response;
    try {
      response = await gapi.client.people.people.connections.list({
        resourceName: "people/me",
        pageSize: 500,
        personFields: "names,phoneNumbers,emailAddresses,photos",
      });
    } catch (err) {
      console.log("Error getting contact list: ");
      setNotLoadedMessage('Erro ao carregar os contatos!')
      return;
    }

    const connections = response.result.connections;

    if (!connections || connections.length === 0) {
      console.log("No connections found");
      setNotLoadedMessage('Lista de contatos vazia!')
      return;
    }

    setContacts(formatConnectionsResult(connections));
  }

  function formatConnectionsResult(connections) {
    const result = connections.map((person) => {
      if (undefined !== person.names) {
        const name = person.names[0].displayName;
        const photo = person.photos[0].url;
        const id = person.resourceName.split("people/")[1];

        const data = { id: id, name, photo: photo };

        if (undefined !== person.phoneNumbers) {
          const phone = person.phoneNumbers[0].value;
          data.phone = phone;
        }

        if (undefined !== person.emailAddresses) {
          const email = person.emailAddresses[0].value;
          data.email = email;
        }

        return data;
      }
    });

    return sortAlphabetically(result);
  }

  function sortAlphabetically(array) {
    const result = array.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return result;
  }

  return (
    <>
      {contacts.length > 0 ? (
        <>
          <ContactsHeader />

          {contacts.map((contact) => {
            if (contact !== undefined) {
              return (
                <ContactItem
                  id={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  email={contact.email}
                  photo={contact.photo}
                />
              );
            }
          })}
        </>
      ) : (
        <h2>{notLoadedMessage}</h2>
      )}
    </>
  );
}

export default ContactList;
