import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { RootState } from "../store/store";

import classes from './Header.module.css';
import { clearAuthState } from "../store/usersSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn: boolean = useSelector.withTypes<RootState>()(state => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(clearAuthState());
  };

  const NavAuth = (
    isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <NavLink to='/login'>Login</NavLink>
  )

  return <nav className={classes.nav}>
    <h1>
      {isLoggedIn ?
        <NavLink to='/'>Attendance Tracker</NavLink> :
        <p>Attendance Tracker</p>
      }
    </h1>
    <ul className={classes.ul}>
      <li>{NavAuth}</li>
      <li><NavLink to={'/sign-up'}>Signup</NavLink></li>
    </ul>
  </nav>;
};
