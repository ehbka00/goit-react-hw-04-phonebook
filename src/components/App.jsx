import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

const saveToLocalStorage = () => {};

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    if (isContactDuplicate(newContact.name)) {
      alert(newContact.name + ' is already in contacts.');
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const contactFilter = evt => {
    const filterStr = evt.target.value.toLowerCase();
    setFilter(filterStr);
  };

  const handleDeleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  const isContactDuplicate = name => {
    return contacts.some(contact => contact.name === name);
  };

  return (
    <div>
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
      </div>

      <div className="contacts">
        <h2>Contacts</h2>
        <Filter contactFilter={contactFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={handleDeleteContact}
        />
      </div>
    </div>
  );
};
