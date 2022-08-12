import { Route, Routes } from 'react-router-dom';
import { LogIn } from 'pages/LogIn';
import { Registration } from '../pages/Registration';
import { AppBar } from './UserMenu/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRefresh } from 'Redux/auth/auth-operations';
import { Contacts } from '../pages/Contacts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  // const loading = useSelector(state => state.contacts.pending);

  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          }
        ></Route>
        {/* {loading && <Loader />} */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
