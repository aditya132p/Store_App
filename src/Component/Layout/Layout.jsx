import Header from '../Container/Header'
import Footer from '../Container/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from '../Sidebar';


/* eslint-disable react/prop-types */
const Layout = () => {
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const Navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLogin(false)
    Navigate("/Login")
    toast.error('logout', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,

    });
  }

// This useEffect fetch user profile form api with the help of token that store in local-storage

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
        setIsLogin(true)
        setUsername(response.data.name)
      } catch (error) {
        console.log(error.message)
      }
    })()

  }, [isLogin])


  // const handleProductClick = async (getId) => {
  //   // console.log(getId)

  //   try {
  //     const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${getId}`)
  //     setgetSingleProduct(response.data)
  //     navigate("/ProductDetails")
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  return (
    <div className='bg-yellow-100 '>
      <Header isLogedin={isLogin} username={username}  handelLogout={handleLogout} />
      
        <Outlet />
      
      <Footer />
    </div>

  )
}

export default Layout