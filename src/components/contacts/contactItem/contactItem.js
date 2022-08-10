import { Link } from "react-router-dom";
import "./contactItem.scss";

function ContactItem({ id, name, phone, email, photo, setIsTyping, isSearch }) {
  const contactLink = "/contato/?id=" + id;

  return (
    <Link to={contactLink} className="c-contact-item" onClick={()=>{
      setIsTyping(false);
    }}>
      <div className="l-flex l-flex--center l-flex--wrap l-flex--negative">
        <article className="l__col-4">
          <img src={photo} className="c-contact-item__photo" />
          {name}
        </article>

        <article className="l__col-4">{phone}</article>

        {!isSearch && <article className="l__col-4">{email}</article>}
      </div>
    </Link>
  );
}

export default ContactItem;
