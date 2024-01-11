import styles from '../css/contactList.module.css';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteOnClick = evt => {
    const parentNode = evt.target.parentNode;
    const dataKey = parentNode.getAttribute('data-key');
    onDelete(dataKey);
  };

  return (
    <ul className={styles.contact_list}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} data-key={contact.id}>
            {contact.name} : {contact.number}
            <button className={styles.btn} onClick={handleDeleteOnClick}>
              Delete{' '}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
