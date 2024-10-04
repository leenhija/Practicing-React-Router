import { useEffect, useState } from "react";
import { useDispatch  } from "react-redux";
import EventsList from '../components/EventsList'
import { fetchEventsData } from "../store/eventActions";
export default function EventsPage(){
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(fetchEventsData())
    },[dispatch])
    return(
      <>
      
       <EventsList />
      </>
    );
}