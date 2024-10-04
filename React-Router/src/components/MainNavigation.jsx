import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/pets_logo.png";
function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <div>
          <img src={logo} alt="pets word" />
          <h2>PETS WORLD</h2>
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
        <nav>
          <ul className={classes.regester}>
            <li>
              <NavLink
                to="/"
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
                to="events/allevents"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
               
              >
                <button className="secondary_button">Login</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* <Outlet/> */}
    </>
  );
}

export default MainNavigation;
