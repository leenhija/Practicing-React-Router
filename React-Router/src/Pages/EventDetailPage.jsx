import EventItem from '../components/EventItem'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function EventDetailPage(){
    const params=useParams();
    const events=useSelector(state=> state.events.events)
    const event=events.find((event)=> event.id === params.id)
    return(
        <>
         <EventItem eventId={params.id}/> 
    
        </>
    );
}