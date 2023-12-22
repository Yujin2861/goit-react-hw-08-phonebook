import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'reduxx/contacts/filterSlice';
import { selectFilter } from 'reduxx/contacts/selectors';

import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <hr />
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={showFilteredContacts}
          className={styles.inputField}
        />
      </label>
    </div>
  );
};
