
import { Trash, Heart } from 'lucide-react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';



function Wishlist() {
  const cardProducts = useOutletContext()[1];
  // console.log(useOutletContext(),cardProducts,"HELLO")
  const  products =[...cardProducts]



  return (
    <div className="mx-auto  flex max-w-3xl flex-col space-y-4  p-6 px-2 sm:p-10 sm:px-2">
      <h2 className="text-3xl pt-10 pb-4 font-bold">Wishlist</h2>
      
      <ul className="flex flex-col divide-y gap-4  divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="flex rounded-md bg-white px-6 flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.image}
                alt={product.name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.title}</h3>
                    <p className="text-sm text-red-400">{product.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">  MRP : ₹ {product.price * 80}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0">
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ₹48,967</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link to='/'
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </Link>
        
      </div>
    </div>
  )
}

export default Wishlist;