import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'reduxx/auth/operations/operation';
import { selectLoading } from 'reduxx/contacts/selectors';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <>
        <label>
          <input
            className={styles.inputField}
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </label>
      </>
      <>
        <label>
          <input
            className={styles.inputField}
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </label>
      </>
      <button className={styles.button} type="submit" disabled={isLoading}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
