import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./contactProfile.scss";

// Add exception for lint
/* global gapi   google*/

function ContactProfile() {
  const [loadedProfile, setLoadedProfile] = useState(false);

  //Get id from url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const rendered = !loadedProfile ? loadContactProfile() : "";

  //Get contact profile with url id
  async function loadContactProfile() {
    if (null === id) {
      return;
    }

    let response;
    try {
      response = await gapi.client.people.people.get({
        resourceName: "people/" + id,
        personFields: "names,phoneNumbers,emailAddresses,addresses",
      });
    } catch (err) {
      console.log("Error getting contact ");
      return;
    }
    prepareProfileData(response.result);
  }

  //Build contact profile objeck with received data
  function prepareProfileData(data) {
    let preparedData = {};

    if (data["names"]) {
      preparedData.Nome = data["names"][0].displayName;
    }

    if (data["emailAddresses"]) {
      preparedData.Email = data["emailAddresses"][0].value;
    }

    if (data["phoneNumbers"]) {
      preparedData.Telefone = data["phoneNumbers"][0].value;
    }

    if (data["addresses"]) {
      preparedData.Endereço1 = data["addresses"][0].streetAddress;
      preparedData.Endereço2 = data["addresses"][0].extendedAddress;
      preparedData.CEP = data["addresses"][0].postalCode;
      preparedData.Cidade = data["addresses"][0].city;
      preparedData.Estado = data["addresses"][0].region;
    }

    setLoadedProfile(preparedData);
  }

  function getProfileDetails() {
    console.log(loadedProfile);

    return (
      <>
        <div className="c-contact-details">
          <h3>Detalhes do contato</h3>

          {loadedProfile.Telefone && (
            <div className="c-contact-details__item">
              <FaPhoneAlt />
              Telefone:
              {" " + loadedProfile.Telefone}
            </div>
          )}

          {loadedProfile.Email && (
            <div className="c-contact-details__item">
              <FaEnvelope />
              E-mail:
              {" " + loadedProfile.Email}
            </div>
          )}

          {loadedProfile.Endereço1 && (
            <div className="c-contact-details__item">
              <FaMapMarkerAlt />
              Endereço:
              {" " + loadedProfile.Endereço1}
            </div>
          )}

          {loadedProfile.Endereço2 && (
            <div className="c-contact-details__item">
              <FaMapMarkerAlt />
              Endereço2:
              {" " + loadedProfile.Endereço2}
            </div>
          )}

          {loadedProfile.CEP && (
            <div className="c-contact-details__item">
              <FaMapMarkerAlt />
              CEP:
              {" " + loadedProfile.CEP}
            </div>
          )}

          {loadedProfile.Cidade && (
            <div className="c-contact-details__item">
              <FaMapMarkedAlt />
              Cidade:
              {" " + loadedProfile.Cidade}
            </div>
          )}

          {loadedProfile.Estado && (
            <div className="c-contact-details__item">
              <FaMapMarkedAlt />
              Estado:
              {" " + loadedProfile.Estado}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <main className="c-main">
      {loadedProfile ? (
        <>
          <h2>{loadedProfile.Nome}</h2>
          <button className="c-button">Editar</button>

          <button className="c-button">Excluir</button>

          {getProfileDetails()}
        </>
      ) : (
        <h2>Contato inexistente</h2>
      )}
    </main>
  );
}

export default ContactProfile;
