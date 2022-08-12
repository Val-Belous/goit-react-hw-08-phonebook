import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/auth-operations';
import styles from '../components/Form/Form.module.css';
import { useNavigate } from 'react-router-dom';
import { getisLogin } from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = { email, password };

    dispatch(logIn(user));
    // navigate('/contacts');
    setEmail('');
    setPassword('');
  };

  const isLogin = useSelector(getisLogin);

  return (
    <>
      {!isLogin && (
        <div>
          <h2>Log In</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
                type="teemailxt"
              />
            </label>
            <label className={styles.label}>
              Password
              <input
                className={styles.input}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter Password"
                type="password"
              />
            </label>
            <button className={styles.btn} type="submit">
              Log In
            </button>
          </form>
        </div>
      )}
    </>
  );
};
