import axios from "axios"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

const SearchInput = () => {
     const [input , setInput] =useState([])
     useEffect(()=>{
       const getData =  setTimeout(()=>{
           axios.get(`https://api.escuelajs.co/api/v1/products/?title=${input}`)
           .then((response) => {
               console.log(response.data);
           });
       }, 2000)
         return () => clearTimeout(getData)

     },[input])


  return (
      <div className='flex items-center rounded-lg f:outline bg-gray-100 px-2'>
          <Search size={16} className='text-yellow-600' />
          <input type="text" placeholder='Search' className=' px-1 bg-transparent  py-2 rounded-md outline-none' onChange={(e)=>setInput(e.target.value)} />
      </div>
  )
}

export default SearchInput