export const fetchEvents=async()=>{
    const response=await fetch('http://localhost:8080/events');
    const EventsData=await response.json();
    if(!response.ok){
        throw new Error('Failed to fetch Events Data')
    }
    return EventsData.events;
}