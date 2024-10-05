import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/developers-gathering-high-resolution-logo-transparent.png";
import { useSelector , useDispatch } from "react-redux";
import {userActions} from '../store/user'
function MainNavigation() {
  const isloggedin=useSelector(state => state.user.isloggedin);
  const userEmail=useSelector(state => state.user.userEmail);
  const dispatch=useDispatch();
  function handleLogout(){
   dispatch(userActions.logout())
  }
  return (
    <>
      <header className={classes.header}>
        <div>
          <img src={logo} alt="pets word" />
          <h2>Developers Gathering</h2>
        </div>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="events/allevents"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
       {!isloggedin && <nav>
          <ul className={classes.regester}>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                <button className="primary_button">Sign up</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
               
              >
                <button className="secondary_button">Login</button>
              </NavLink>
            </li>
          </ul>
        </nav>}
        {isloggedin && 
        <div className={classes.logout}>
          <p>{userEmail}</p>
          <button className={classes.logoutButton} onClick={handleLogout}>logout</button>
        </div>
       }
      </header>
      {/* <Outlet/> */}
    </>
  );
}

export default MainNavigation;
