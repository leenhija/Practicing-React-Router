import { useEffect, useState } from "react";
import { fetchEvents } from "../http";
import { useDispatch , useSelector } from "react-redux";
import EventsList from '../components/EventsList'
import { fetchEventsData } from "../store/eventActions";
export default function EventsPage(){
    // const [isFetching , setIsFetching]=useState(false);
    // const [eventsData ,setEventsData ]=useState([]);
    // const [error , setError]=useState()
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //       setIsFetching(true);
    //       try{
    //        const events=await fetchEvents();
    //        setEventsData(events);
    //       }catch(error){
    //        setError({message:error.message || 'Failed to Fetch Data'})
    //       }
    //       setIsFetching(false);
    //     }
    //     fetchData()
    // },[fetchEvents])
    // if(error){
    //     return(
    //       <div>
    //         <p>somthing went wrong!</p>
    //         <p>please check your internet connection! or try to reload the Page!</p>
    //       </div>
    //     );
    // }
    // 
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(fetchEventsData())
    },[dispatch])
    return(
      <>
      {/* {isFetching && <p>Fetching Data...</p>} */}
       {/* {!isFetching && <EventsList events={eventsData} />} */}
       <EventsList />
      </>
    );
}