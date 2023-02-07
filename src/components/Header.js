import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../store/auth-slice";

const Header = () => {
  // to dispatch Actions
  const dispatch = useDispatch();

  // to Tap inside the Auth Store and Access Values i.e Initial States
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // Actions
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {/* When the User is Authenticated */}
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
