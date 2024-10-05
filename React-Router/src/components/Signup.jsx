import classes from './Signup.module.css'
import { signup } from '../store/userActions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
export default function Signup(){
  const dispatch=useDispatch()
  const navigate=useNavigate()
    async function submitHandler (event){
        event.preventDefault();
        const fd = new FormData(event.target);
        const newUser = Object.fromEntries(fd.entries());
       dispatch(signup(newUser));
       navigate('/')
    }
    return(
      <div className={classes.signup}>
        <h2 style={{ fontSize:'30px'}}>Sign Up</h2>
        <form
        className={classes.form}
        onSubmit={submitHandler }
      >
        <p>
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            
          />
        </p>
        <p>
          <label htmlFor="password">Enter a Password</label>
          <input
            id="password"
            type="password"
            name="password"
            minLength={8}
            required
          />
        </p>
        <p>
          <label htmlFor="country">City</label>
          <input
            id="city"
            name="city"
            type="text"
            required
          />
        </p>
        <p className={classes.gotologin}>
          Already have an account? <Link to='/login'>login</Link>
        </p>
        <div className={classes.actions}>
          <button>Sign up</button>
        </div>
      </form>
      </div>
       
    )
}