import { useParams } from "react-router-dom"
import EventForm from "../components/EventForm"

export default function EditEventPage(){
    const params=useParams()
    return(
        <>
        <h2>Edit your Event</h2>
        <EventForm method="edit" eventId={params.id}/>
        </>
    )
}