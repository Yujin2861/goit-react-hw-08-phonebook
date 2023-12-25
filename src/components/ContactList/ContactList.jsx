import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'reduxx/contacts/operations/contactsThunk';
import { getFilteredContacts, selectContacts } from 'reduxx/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const users = useSelector(selectContacts);
  return (
    <>
      <h3 className={styles.contactInfo}>
        Your phonebook has {users.length} contacts
      </h3>
      <hr />
      <ul className={styles.contactList}>
        {contacts.map(item => (
          <li key={item.id} className={styles.contactUser}>
						<div className={styles.wrapper}>
            <p className={styles.user}>
              <b className={styles.userName}>{item.name}</b>
            </p>
            <span>{item.number}</span>
            </div>
            <button
              type="button"
              onClick={() => dispatch(deleteContactThunk(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
