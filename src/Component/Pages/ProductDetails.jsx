// import React from 'react'
import { Star } from 'lucide-react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const { id } = useParams();
    const [productDetails, setproductDetails] = useState({})
  

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setproductDetails(response.data))
            .catch(error => console.log(error))
            console.log("platzi is working properly")
    }, [id])

    // console.log(productDetails?.rating?.rate)
    return (
        <section className="overflow-hidden">
            <div className="mx-auto max-w-5xl px-5 py-28">
                <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                    <div className='bg-white flex justify-center rounded-lg'><img
                        alt="Nike Air Max 21A"
                        className="h-64  rounded-md object-contain lg:h-96 lg:w-1/2"
                        src={productDetails?.image}
                    /></div>

                    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                        <h2 className="text-sm font-semibold tracking-widest text-gray-500">{productDetails?.category}</h2>
                        <h1 className="my-4 text-3xl font-semibold text-black">{productDetails?.title} work</h1>
                        <div className="my-4 flex items-start">
                            <span className="flex items-center flex-col space-x-1">
                                <div className='flex'>
                                <span className="ml-3 block text-xs font-semibold"> {productDetails?.rating?.rate} rating :</span>
                               
                                    {[...Array(3)].map((_, i) => (
                                        <Star key={i} size={16} fill="yellow" className="text-yellow-500" />
                                    ))}
                                </div>
                               
                                <span className="ml-3 block text-xs font-semibold"> {productDetails?.rating?.count} Reviews</span>
                            </span>
                        </div>
                        <p className="leading-relaxed">
                            {productDetails?.description}
                        </p>
                        <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
            
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="title-font text-xl font-bold text-green-700"> MRP :{productDetails?.price * 80}</span>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                                Add to Cart
                            </button>
                            <button
                                type="button"
                                className="rounded-md bg-gray-800 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
