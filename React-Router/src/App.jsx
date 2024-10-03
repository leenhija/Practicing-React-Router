
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Products from './Pages/Products.jsx'
import RootLayout from './Pages/root.jsx'
const router=createBrowserRouter([
  {path:'/' , element:<RootLayout/>,
    children:[
      {path:'/', element:<HomePage/>},
      {path:'/products',element:<Products/>}

    ]
  },
  
])
function App() {

  return (
  <RouterProvider router={router}/>
  )
}

export default App
