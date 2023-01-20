import PropTypes from 'prop-types';
import shortid from 'shortid';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={shortid.generate()}>{contact.name}</li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
