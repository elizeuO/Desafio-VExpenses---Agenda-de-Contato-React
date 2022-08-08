import './contactField.scss';

function ContactField({type, name, placeholder}) {
  return <div className="c-contact-field">
        <input type={type} name={name} placeholder={placeholder} />
        </div>;
}

export default ContactField;
