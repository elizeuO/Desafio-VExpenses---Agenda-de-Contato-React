import ContactField from "../contactField/contactField";

function ContactFieldSet({ type }) {
  function switchType() {
    switch (type) {

      case "person":
        return (
          <>
            <ContactField type="text" name="first-name" placeholder="Nome"/>
            <ContactField type="text" name="last-name" placeholder="Sobrenome"/>
          </>
        );
        break;

        case "email":
            return (
              <>
                <ContactField type="email" name="email" placeholder="E-mail"/>
              </>
            );
            break;

            case "phone":
            return (
              <>
                <ContactField type="phone" name="phone" placeholder="Telefone"/>
              </>
            );
            break;
        
      default:
        break;
    }
  }

  return <>{switchType()}</>;
}

export default ContactFieldSet;
