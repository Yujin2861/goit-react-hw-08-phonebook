import { useDispatch } from 'react-redux';
import { logOut } from 'reduxx/auth/operations/operation';
import { useAuth } from 'hooks/useAuth';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.userMenuWrapper}>
      <h3 className={styles.userWelcome}>Welcome, {user.name}</h3>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
