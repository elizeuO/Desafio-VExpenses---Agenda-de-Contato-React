import "./contactItem.scss";

function ContactItem({ name, phone, email }) {
  return (
    <a className="c-contact-item">
      <div className="l-flex l-flex---center l-flex--wrap l-flex--negative">
        <article className="l__col-4">
          <div className="c-contact-item__photo">{name.slice(0,1)}</div>

          {name}
        </article>

        <article className="l__col-4">{phone}</article>

        <article className="l__col-4">{email}</article>
      </div>
    </a>
  );
}

export default ContactItem;
