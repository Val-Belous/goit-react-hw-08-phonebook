import { Route, Routes } from 'react-router-dom';
import { LogIn } from 'pages/LogIn';
import { Registration } from '../pages/Registration';
import { AppBar } from './UserMenu/AppBar';
import { Contacts } from 'pages/Contacts';

export const App = () => {
  // const loading = useSelector(state => state.contacts.pending);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Registration />}></Route>
          <Route path="login" element={<LogIn />}></Route>
          {/* <Route path="/contacts" element={<Contacts />}></Route> */}
          {/* {loading && <Loader />} */}
        </Route>
      </Routes>
    </>
  );
};
