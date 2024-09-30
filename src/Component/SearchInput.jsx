
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import { sagaSearchProduct } from "../store/Product/product.action"
// import {sagaSearchProduct} from "../store/Product/product.action"
// import { searchProdSaga } from "../store/Product/product.saga"

const SearchInput = () => {

     let searchInp = useDispatch()
     const [input , setInput] =useState([])
     
     useEffect(()=>{
       const getData =  setTimeout(()=>{
           searchInp(sagaSearchProduct(input))
        //    console.log("searech")
       }, 500)
         return () => clearTimeout(getData)

     }, [input,searchInp])


  return (
      <div className='flex items-center rounded-lg f:outline bg-gray-100 px-2'>
          <Search size={16} className='text-yellow-600' />
          <input type="text" placeholder='Search' className=' px-1 bg-transparent  py-2 rounded-md outline-none' onChange={(e)=>setInput(e.target.value)} />
      </div>
  )
}

export default SearchInput