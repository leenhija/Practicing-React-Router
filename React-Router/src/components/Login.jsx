import classes from './Login.module.css'
import { useDispatch } from 'react-redux';
import {login} from '../store/userActions'
import { Link, useNavigate } from 'react-router-dom';
export default function Signup(){
  const navigate=useNavigate()
  const dispatch=useDispatch()
    async function submitHandler (event){
        event.preventDefault();
        const fd = new FormData(event.target);
        const newUser = Object.fromEntries(fd.entries());
        dispatch(login(newUser));
        navigate('/');
    }
    return(
      <div className={classes.login}>
        <h2 style={{ fontSize:'30px'}}>Login</h2>
        <form
        className={classes.form}
        onSubmit={submitHandler }
      >
        <p>
          <label htmlFor="email"> Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            
          />
        </p>
        <p>
          <label htmlFor="password"> Your Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
          />
        </p>
        <p className={classes.gotosignup}>
          do not have an account ? <Link to="/signup">Signup</Link>
        </p>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
      </div>
       
    )
}