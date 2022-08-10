import "./search.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import ContactItem from "../contacts/contactItem/contactItem";

// Add exception for lint
/* global gapi   google*/

function Search() {
  const [focused, SetFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const classValues = focused ? "c-search active" : "c-search";

  async function searchContacts(ev) {
    const query = ev.target.value;

    if ("" === query) {
      return;
    }

    let response;
    try {
      response = await gapi.client.people.people.searchContacts({
        query: query,
        pageSize: 10,
        readMask: "names,phoneNumbers,emailAddresses,photos",
      });
    } catch (err) {
      console.log("Error searching contacts");
      return;
    }

    const results = response.result.results;

    renderSearchResults(formatConnectionsResult(results));
  }

  function formatConnectionsResult(connections) {
    if (undefined === connections) {
      setSearchResults("Nenhum resultado foi encontrado");
      return;
    }
    const result = connections.map((person) => {
      const name = person.person.names[0].displayName;
      const photo = person.person.photos[0].url;
      const id = person.person.resourceName.split("people/")[1];

      const data = { id: id, name, photo: photo };

      if (undefined !== person.person.phoneNumbers) {
        const phone = person.person.phoneNumbers[0].value;
        data.phone = phone;
      }

      if (undefined !== person.person.emailAddresses) {
        const email = person.person.emailAddresses[0].value;
        data.email = email;
      }

      return data;
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

  function renderSearchResults(results) {
    if (results === undefined) {
      return;
    }

    const content = results.map((result) => {
      return (
        <ContactItem
          id={result.id}
          name={result.name}
          phone={result.phone}
          photo={result.photo}
          setIsTyping={setIsTyping}
          isSearch="true"
        />
      );
    });
    setIsTyping(true);
    setSearchResults(content);
  }

  return (
    <>
      <article className="l__col-8">
        <div className={classValues} onMouseLeave={()=>{
          setIsTyping(false)
        }}>
          <FaSearch />
          <input
            type="text"
            placeholder="Pesquisa"
            onChange={searchContacts}
            onBlur={() => {
              SetFocused(false);
            }}
          />

          {isTyping && <div className="c-search__results">{searchResults}</div>}
        </div>
      </article>
    </>
  );
}

export default Search;
