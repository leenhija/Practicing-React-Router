import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import RootLayout from './Pages/root.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import EventsPage from './Pages/EventsPage.jsx'
import EventsRoot from './Pages/EvetsRoot.jsx'
import EventDetailPage from './Pages/EventDetailPage.jsx'
import NewEventPage from './Pages/NewEventPage.jsx'
import EditEventPage from './Pages/EditEventPage.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'

const router=createBrowserRouter([
  {path:'/' , element:<RootLayout/>,errorElement:<ErrorPage/>,
    children:[
      {path:'/',element:<HomePage/>},
      {path:'/events', element:<EventsRoot/>, children:[
        {path:'allevents', element:<EventsPage/>},
        {path:'allevents/:id',element:<EventDetailPage/>},
        {path:'new', element:<NewEventPage/>},
        {path:'allevents/:id/edit/:id', element:<EditEventPage/>}

      ]},
      {path:'/signup',element:<SignupPage/>},
      {path:'/login',element:<LoginPage/>}
    ]
  },
  
])
function App() {

  return (
  <RouterProvider router={router}/>
  )
}

export default App
