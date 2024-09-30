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
import Spinner from './Component/Common/Spinner';

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
    element: <Suspense fallback={<Spinner />}><Layout /></Suspense>,
    children: [
      {
        path: "",
        element: <Suspense fallback={<Spinner />}><Home /></Suspense>,
      },
      {
        path: "/wishlist",
        element: <Suspense fallback={<Spinner />}><Wishlist /></Suspense>,
      },
      {
        path: "/product/:id",
        element: <Suspense fallback={<Spinner />}><ProductDetails /></Suspense>,
      },
      {
        path: "/Cart",
        element: <Suspense fallback={<Spinner/>}><Cart /></Suspense>,
      },
    ],
  },
  {
    path: "SignUp",
    element: <Protect><Suspense fallback={<Spinner />}><Sign /></Suspense></Protect>,
  },
  {
    path: "Login",
    element: <Protect><Suspense fallback={<Spinner />}><Login /></Suspense></Protect>,
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
