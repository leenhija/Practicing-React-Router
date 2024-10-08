// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

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
