import ContactForm from "../contactForm/contactForm";

function NewContact() {
  return <main className="c-main">
    <h2>
        Novo contato
    </h2>

    <button className="c-button">Salvar</button>
    
    <ContactForm />
  </main>;
}

export default NewContact;
