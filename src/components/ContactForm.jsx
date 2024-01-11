import { nanoid } from 'nanoid';
import { useState } from 'react';

import styles from '../css/contactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number, id: nanoid() });
    clearFormState();
  };

  const clearFormState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <div className={styles.form_name}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_number}>
          <label>Number</label>
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </div>
    </form>
  );
};
