import classes from './EventItem.module.css';
import { useSelector } from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';
import { DeleteEvent } from '../store/eventActions';
import { useDispatch  } from 'react-redux';
import { useEffect, useState } from 'react';
function EventItem({ eventId }) {
 const [event , setEvent]=useState({})
  const dispatch=useDispatch()
  const navigate=useNavigate()
  function startDeleteHandler() {
    dispatch(DeleteEvent(eventId))
    navigate("/events/allevents");

  }
 useEffect(()=>{
  const fetchData=async()=>{
   try{ const response=await fetch(`http://localhost:8080/events/${eventId}`);
    const EventData=await response.json();
    if(!response.ok){
        throw new Error('Failed to fetch Event Data')
    }
      setEvent(EventData.event)
      console.log(EventData);
      
  }catch(error){
      throw new Error({message:error.message || 'an error occured'})
    }
  }
// try{
//  const eventData= fetchData();
fetchData()
 
//  setEvent(eventData)
// }catch(error){
//   throw new Error({message:error.message || 'an error occured'})
// }
 },[])
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`edit/${event.id}`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
