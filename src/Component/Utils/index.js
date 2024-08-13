import { Navigate } from "react-router-dom"
import { toast } from "react-toastify"
const handleLogout = ()=>{
      localStorage.removeItem("token")
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


export {handleLogout}