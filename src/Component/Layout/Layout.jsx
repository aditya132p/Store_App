import Header from '../Container/Header'
import Footer from '../Container/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


/* eslint-disable react/prop-types */
const Layout = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [isLogin, setIsLogin] = useState(false)
  const [cartCount, setcartCount] = useState(0)
  const [cardProducts, setCardProduct] = useState([])

  const addToCart = (data) => {
    let check = cardProducts.some(value => value.id === data.id)

    if (!check) {
      if (localStorage.token) {
        setcartCount(cartCount + 1)
        setCardProduct([...cardProducts, data]);
      } else {
        navigate('/SignUp');
      }
    } else {
      // c  onsole.log("items already exits")
    }
  }
  // console.log(cardProducts);
  // console.log(localStorage.getItem("token"))
const Navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLogin(false)
    //   window.location.reload()
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

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
        setIsLogin(true)
        setUsername(response.data.name)
      } catch (error) {
        console.log(error)
      }
    })()

  }, [isLogin])

  return (
    <div className='bg-yellow-100 '>
      <Header isLogedin={isLogin} username={username} cartCount={cartCount} handelLogout={handleLogout} />
      <Outlet context={[addToCart, cardProducts, setCardProduct]} />
      <Footer />
    </div>

  )
}

export default Layout