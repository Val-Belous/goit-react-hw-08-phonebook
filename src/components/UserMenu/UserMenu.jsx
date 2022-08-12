import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/auth-operations';
import { getUserName } from 'Redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';

import styles from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <span className={styles.spanchik}>Welcome, {name}</span>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          dispatch(logOut());
          return navigate('/login');
        }}
      >
        Log Out
      </button>
    </div>
  );
};
