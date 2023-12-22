import { useDispatch } from 'react-redux';
import { register } from 'reduxx/auth/operations/operation';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input
          className={styles.inputField}
          type="text"
          name="name"
          placeholder="Username"
          required
        />
      </label>

      <label>
        <input
          className={styles.inputField}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>

      <label>
        <input
          className={styles.inputField}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
};
