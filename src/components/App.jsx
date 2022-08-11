// import { Contacts } from 'pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import { LogIn } from 'pages/LogIn';
import { Registration } from '../pages/Registration';
import { AppBar } from './UserMenu/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRefresh } from 'Redux/auth/auth-operations';
import { Contacts } from '../pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  // const loading = useSelector(state => state.contacts.pending);

  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<AppBar />}>
          <Route index element={<Registration />}></Route>
          <Route path="login" element={<LogIn />}></Route>
          {/* {loading && <Loader />} */}
        </Route>
        {/* <Route path="/contact" element={<Contacts />}></Route> */}
      </Routes>
    </>
  );
};
