import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
export default function EventsRoot(){
    return(
        <>
        <EventsNavigation/>
        <main>
          <Outlet/>
        </main>
        </>
    )
}