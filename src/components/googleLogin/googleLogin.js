import { useEffect, useState } from "react";
import('./googleLogin.scss');

// Add exception for lint
/* global 
    gapi  
    google*/

function GoogleLogin({setUser}) {

  const apiKey = "AIzaSyB7thtadtfOooWCROJVBCFhyRTa5YwSScw";
  const clientID =
    "917135999824-ftj0457nvl12pm0pjdlq3lmh6chu64jt.apps.googleusercontent.com";

  // Discovery doc URL for APIs used by the quickstart
  const discoveryDoc =
    "https://www.googleapis.com/discovery/v1/apis/people/v1/rest";

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const scopes = "https://www.googleapis.com/auth/contacts.readonly";

  let tokenClient;
  let gapiInited = false;
  let gisInited = false;

  /**
   * Callback after api.js is loaded.
   */
  function gapiLoaded() {
    gapi.load("client", intializeGapiClient);
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async function intializeGapiClient() {
    await gapi.client.init({
      apiKey: apiKey,
      discoveryDocs: [discoveryDoc],
    });
    gapiInited = true;
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: clientID,
      scope: scopes,
      callback: "", // defined later
    });
    gisInited = true;
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick() {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp;
      }

      document.getElementById("authorize_button").innerText = "Refresh";
      await setUser(true);
    };

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: "consent" });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: "" });
    }

  }

  useEffect(() => {
    gapiLoaded()
    gisLoaded();
  });

  return (
  <>
  <button id="authorize_button" onClick={(e)=>{
      handleAuthClick();
  }
    }>Faça login com o Google</button>
  </>);
}

export default GoogleLogin;
