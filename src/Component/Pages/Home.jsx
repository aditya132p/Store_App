// import React from 'react'
import ProductList from '../Container/ProductList'
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [addToCart, setCardProduct] = useOutletContext();

  return (
    <div>
      <ProductList addToCart={addToCart} addToProduct={setCardProduct} />
    </div>
  )
}

export default Home