
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Products from './Pages/Products.jsx'
import RootLayout from './Pages/root.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'
const router=createBrowserRouter([
  {path:'/' , element:<RootLayout/>,errorElement:<ErrorPage/>,
    children:[
      {index:true,path:'', element:<HomePage/>},
      {path:'products',element:<Products/>},
      {path:'products/:productId',element:<ProductDetail/>},

    ]
  },
  
])
function App() {

  return (
  <RouterProvider router={router}/>
  )
}

export default App
