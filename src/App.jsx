/* eslint-disable react/prop-types */
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import Sign from './Component/Pages/SignUp'
import Login from "./Component/Pages/Login"
import Layout from './Component/Layout/Layout'
import Wishlist from './Component/Container/Wishlist'
import Home from "./Component/Pages/Home";
// import Layout from './Component/Layout/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Layout />,
    children: [
      {
        path: "",
        element:  <Home />,
      },
      {
        path: "/wishlist",
        element:  <Wishlist/>,
      },
      
    ],
  },

  {
        path: "SignUp",
        element:  <Sign />,
      },
      {
        path: "Login",
        element: <Login/>,
      }
]);


function App() {
  return ( 
    <>
      <RouterProvider router={router} />    
    </>
  )
}

export default App
