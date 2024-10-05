import { Link } from "react-router-dom";
import classes from "./Promotion.module.css";
export default function Promotion() {
  return (
    <>
      <main className={classes.main}>
        <h1>Discover Exciting Events Near You</h1>
        <p>
          Join us in exploring a variety of events happening in your area. From
          awareness lessons about your career to cooding challenges
        </p>
        <p>where you can absolutely grow with a community.</p>
        
        <div>
          <Link to="events/allevents" >
            <button className="primary_button home_button">Brows Events</button>
          </Link>
          <Link to="events/new" style={{ textDecoration: 'none' }}>
            <button className="secondary_button home_button">
              Create New Event
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
