import "./contactItem.scss";

function ContactItem({ name, phone, email, photo }) {
  return (
    <a href="" className="c-contact-item">
      <div className="l-flex l-flex---center l-flex--wrap l-flex--negative">
        <article className="l__col-4">

          <img src={photo} className="c-contact-item__photo" />
          {name}
        </article>

        <article className="l__col-4">{phone}</article>

        <article className="l__col-4">{email}</article>
      </div>
    </a>
  );
}

export default ContactItem;
