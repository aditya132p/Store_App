/* eslint-disable react/prop-types */
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Protect from './Routes/Protect';
import { sagaGetProduct } from './store/Product/product.action';

// Lazy load components
const Sign = lazy(() => import('./Component/Pages/SignUp'));
const Login = lazy(() => import('./Component/Pages/Login'));
const Layout = lazy(() => import('./Component/Layout/Layout'));
const Wishlist = lazy(() => import('./Component/Container/Wishlist'));
const Home = lazy(() => import('./Component/Pages/Home'));
const ProductDetails = lazy(() => import('./Component/Pages/ProductDetails'));
const Cart = lazy(() => import('./Component/Container/Cart'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}><Layout /></Suspense>,
    children: [
      {
        path: "",
        element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>,
      },
      {
        path: "/wishlist",
        element: <Suspense fallback={<div>Loading...</div>}><Wishlist /></Suspense>,
      },
      {
        path: "/product/:id",
        element: <Suspense fallback={<div>Loading...</div>}><ProductDetails /></Suspense>,
      },
      {
        path: "/Cart",
        element: <Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>,
      },
    ],
  },
  {
    path: "SignUp",
    element: <Protect><Suspense fallback={<div>Loading...</div>}><Sign /></Suspense></Protect>,
  },
  {
    path: "Login",
    element: <Protect><Suspense fallback={<div>Loading...</div>}><Login /></Suspense></Protect>,
  }
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sagaGetProduct());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
