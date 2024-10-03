import { Outlet } from "react-router-dom"
import classes from './Root.module.css'
import MainNavigationBar from "../components/MainNavigationBar"
export default function RootLayout(){
    return(
        <>
        <MainNavigationBar/>
        <main >
        <Outlet/>

        </main>
        </>
    )
}