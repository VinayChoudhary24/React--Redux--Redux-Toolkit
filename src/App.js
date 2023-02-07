import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  // to Tap inside the Auth Store and Access Values i.e Initial States
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />

      {/* When the User is NOT Authenticated */}
      {!isAuth && <Auth />}

      {/* When the User is Authenticated */}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
