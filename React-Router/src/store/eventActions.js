import { eventActions } from "./events";
export const fetchEventsData=()=>{
    return async dispatch=>{
        const fetchData=async()=>{
            const response=await fetch('http://localhost:8080/events');
            const EventsData=await response.json();
            if(!response.ok){
                throw new Error('Failed to fetch Events Data')
            }
            return EventsData.events;
        }
        try{
         const eventData=await fetchData();
    
         
         dispatch(eventActions.getEvents({eventData}));
        }catch(error){
          throw new Error({message:error.message || 'an error occured'})
        }
    }
}
export const addNewEvent=(newEvent , email)=>{
    return async dispatch=>{
        const AddhNewData=async()=>{
            const response=await fetch('http://localhost:8080/events',{
                method:'POST',
                body:JSON.stringify({...newEvent,'email':email}),
                headers: {
                    'Content-Type': 'application/json', 
                  },
            })
            if(!response.ok){
                throw new Error('Failed to Add New Event')
            }
        }
        try{
         await AddhNewData()
        }catch(error){
            throw new Error({message:error.message || 'an error occured'})
        }
    }
}
export const EditEvent=(id , editedEvent)=>{
return async dispatch=>{
    const editeventhadler=async()=>{
     const response=await fetch(`http://localhost:8080/events/${id}`,{
        method:'PATCH',
        body:JSON.stringify(editedEvent),
        headers: {
            'Content-Type': 'application/json',
          },
     })
     if(!response.ok){
        throw new Error('Failed to Edit the Event')
    }
    }
    try{
        await editeventhadler()
       }catch(error){
           throw new Error({message:error.message || 'an error occured'})
       }
}
}
export const DeleteEvent=(id)=>{
    return async dispatch=>{
        const deleteEventhadler=async()=>{
            const response=await fetch(`http://localhost:8080/events/${id}`,{
               method:'DELETE',
               headers: {
                   'Content-Type': 'application/json', 
                 },
            })
            if(!response.ok){
               throw new Error('Failed to Delete the Event')
           }
           }
           try{
               await deleteEventhadler()
              }catch(error){
                  throw new Error({message:error.message || 'an error occured'})
              }
    }
}
export const fetchoneEvent=(id)=>{
    return async dispatch=>{
        const fetchData=async()=>{
            const response=await fetch(`http://localhost:8080/events/${id}`);
            const EventData=await response.json();
            if(!response.ok){
                throw new Error('Failed to fetch Event Data')
            }
            return EventData;
        }
        try{
         const eventData=await fetchData();
    
         
         dispatch(eventActions.getEvent({eventData}));
        }catch(error){
          throw new Error({message:error.message || 'an error occured'})
        }
    }  
}