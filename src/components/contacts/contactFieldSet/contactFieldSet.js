import ContactField from "../contactField/contactField";

function ContactFieldSet({ type }) {
  function switchType() {
    switch (type) {

      case "person":
        return (
          <>
            <ContactField type="text" name="firstname" placeholder="Nome"/>
            <ContactField type="text" name="lastname" placeholder="Sobrenome"/>
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

            case "address":
              return (
                <>
                  <ContactField type="text" name="address1" placeholder="Endereço 1"/>
                  <ContactField type="text" name="address2" placeholder="Endereço 2"/>
                  <ContactField type="text" name="city" placeholder="Cidade"/>
                  <ContactField type="text" name="state" placeholder="Estado"/>
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
