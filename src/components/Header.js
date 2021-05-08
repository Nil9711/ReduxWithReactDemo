import classes from "./Header.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      {isAuthenticated && (
        <>
          <h1>Redux Auth</h1>
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </nav>
        </>
      )}
      {!isAuthenticated && (
        <>
          <h1>Redux Auth</h1>
          <nav></nav>
        </>
      )}
    </header>
  );
};

export default Header;
