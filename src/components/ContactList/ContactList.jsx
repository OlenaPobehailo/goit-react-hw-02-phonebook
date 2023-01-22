import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import shortid from 'shortid';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li
          className={css.listItem}
          // id={shortid.generate()}
          key={shortid.generate()}
        >
          {contact.name + ': ' + contact.number}

          <button
            className={css.deleteButton}
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
