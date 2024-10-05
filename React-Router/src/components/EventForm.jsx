import { useNavigate } from "react-router-dom";
import classes from "./EventForm.module.css";
import { addNewEvent } from "../store/eventActions";
import { useDispatch, useSelector } from "react-redux";
import { EditEvent } from "../store/eventActions";
function EventForm({ method, eventId }) {
  const navigate = useNavigate();
  const isloggedin=useSelector(state => state.user.isloggedin);
  const events = useSelector((state) => state.events.events);
  const event = events.find((event) => event.id == eventId);
  const dispatch = useDispatch();
  function cancelHandler() {
    navigate("/events/allevents");
  }
  function submitHandler(event) {
    event.preventDefault();
    if(!isloggedin){
      navigate('/login');
      return
    }
    const fd = new FormData(event.target);
    const newEvent = Object.fromEntries(fd.entries());
    dispatch(addNewEvent(newEvent));
    navigate("/events/allevents");
  }
  function editHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const newEvent = Object.fromEntries(fd.entries());
    dispatch(EditEvent(eventId, newEvent));
    navigate("/events/allevents/");
  }
  return (
    <form
      className={classes.form}
      onSubmit={method == "add" ? submitHandler : editHandler}
    >
       <p>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          name="email"
          required={method == "add" ? true : false}
          placeholder={method==='edit'?event.email:''}
          
        />
      </p>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required={method == "add" ? true : false}
          placeholder={method==='edit'?event.title:''}
          
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required={method == "add" ? true : false}
          placeholder={method==='edit'?event.image:''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required={method == "add" ? true : false}
          placeholder={method==='edit'?event.date:''}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required={method == "add" ? true : false}
          placeholder={method==='edit'?event.description:''}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
