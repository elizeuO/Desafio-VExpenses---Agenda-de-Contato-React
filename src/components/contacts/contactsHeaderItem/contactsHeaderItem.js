import './contactsHeaderItem.scss';

function ContactsHeaderItem({title}) {
  return (<article className="l__col-4">
            <span className="c-contact-header__title">
                {title}
            </span>
        </article>
  );
}

export default ContactsHeaderItem;
