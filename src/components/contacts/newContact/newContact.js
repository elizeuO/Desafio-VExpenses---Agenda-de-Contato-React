import ContactForm from "../contactForm/contactForm";

// Add exception for lint
/* global gapi   google*/

function NewContact() {
  async function createContact() {
    let response;
    try {
      response = await gapi.client.people.people.createContact({
        resource: {
          names: {
            givenName: "Testei",
            familyName: "Testando",
          },
          emailAddresses: {
            value: "teste@teste.com",
          },
          phoneNumbers: [
            {
              value: "99 99999",
            },
          ],
        },
      });
    } catch (err) {
      console.log("Error creating contact ");
      return;
    }

    console.log(response);
  }

  return (
    <main className="c-main">
      <h2>Novo contato</h2>

      <button className="c-button" onClick={createContact}>
        Salvar
      </button>

      <ContactForm />
    </main>
  );
}

export default NewContact;
