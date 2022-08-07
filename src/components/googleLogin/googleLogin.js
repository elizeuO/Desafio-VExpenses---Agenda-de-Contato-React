import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function GoogleLogin() {
  const [user, setUser] = useState({});

  function handleCallBackReponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    let userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.querySelector('#google-login').hidden = true;
  }

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "917135999824-ftj0457nvl12pm0pjdlq3lmh6chu64jt.apps.googleusercontent.com",
      callback: handleCallBackReponse,
    });
    google.accounts.id.renderButton(document.querySelector("#google-login"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return <div id="google-login"></div>;
}

export default GoogleLogin;
