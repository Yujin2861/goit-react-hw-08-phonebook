import styles from './ContactForm.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'reduxx/contacts/operations/contactsThunk';
import { Notify } from 'notiflix';
import { selectContacts } from 'reduxx/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const isInContact = contacts.some(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );
    if (isInContact) {
      Notify.warning(`This contact has already exists`);
      return;
    }

    const newObj = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addContactThunk(newObj));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <label>
        <input
          className={styles.inputField}
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <input
          className={styles.inputField}
          placeholder="Phone number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};
