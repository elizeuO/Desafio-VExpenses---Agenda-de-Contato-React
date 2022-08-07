import { useEffect, useState } from "react";

function Contacts() {
  const [contacts, setcontacts] = useState([]);

  // Add exception for lint
/* global 
    gapi  
    google*/

    listConnectionNames();

  async function listConnectionNames() {
    let response;
    try {
      // Fetch first 10 files
      response = await gapi.client.people.people.connections.list({
        resourceName: "people/me",
        pageSize: 100,
        personFields: "names,emailAddresses",
      });
    } catch (err) {
      console.log('error')
      return;
    }
    const connections = response.result.connections;
    if (!connections || connections.length == 0) {
      document.getElementById("content").innerText = "No connections found.";
      return;
    }
    // Flatten to string to display
    const output = connections.reduce((str, person) => {
      if (!person.names || person.names.length === 0) {
        return `${str}Missing display name\n`;
      }
      return `${str}${person.names[0].displayName}\n`;
    }, "Connections:\n");

    console.log(output)
  }

  return <></>;
}

export default Contacts;
