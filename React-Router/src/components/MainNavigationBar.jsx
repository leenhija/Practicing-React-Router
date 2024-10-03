import { Link } from "react-router-dom";
import classes from './MainNavigationBar.module.css'
export default function MainNavigationBar(){
    return(
        <header className={classes.header}>
  <nav>
        <ul className={classes.list}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
        </ul>
       </nav>
        </header>
     
    );
}