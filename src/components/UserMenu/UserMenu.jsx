import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/auth-operations';
import { getUserName } from 'Redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const navigate = useNavigate();

  return (
    <div className={styles.userContainer}>
      <span className={styles.spanchik}>Welcome, {name}</span>
      {/* <button
        className={styles.btn}
        type="button"
        onClick={() => {
          dispatch(logOut());
          return navigate('/login');
        }}
      >
        Log Out
      </button> */}
      <Button
        sx={{
          color: '#fff8dc',
          backgroundColor: '#e9967a',
          '&:hover': {
            color: '#e9967a',
            background: '#fff8dc',
          },
        }}
        type="button"
        onClick={() => {
          dispatch(logOut());
          return navigate('/login');
        }}
        variant="contained"
        endIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </div>
  );
};
