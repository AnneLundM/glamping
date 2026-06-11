import { useState } from "react";
import { useAuthContext } from "../../context/useAuthContext";
import styles from './login.module.css'

export const Login = () => {
  const { signIn } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type='submit'>Log ind</button>
      </form>
    </section>
  );
};
