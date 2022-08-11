import { Contacts } from '../../pages/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/auth-operations';
import { getUserName } from 'Redux/auth/auth-selectors';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from '../../components/Form/Form.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const navigate = useNavigate();

  return (
    <div>
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
      <Contacts />
    </div>
  );
};
