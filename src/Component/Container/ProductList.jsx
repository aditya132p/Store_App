import ProductCard from "../Common/ProductCard";
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../Common/Spinner";


const ProductList = (props) => {
  // const [addToProduct] =props
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
  }, []);




  return (

    <div className="min-h-full py-32  px-4 max-w-screen-xl grid grid-cols-4 gap-x-6 grid-rows-1 max-sm:grid-cols-1 max-md:grid-cols-2  max-lg:grid-cols-3 max-sm:w-96 gap-y-9 mx-auto">
      {products.length > 0 ? (
        products.map((product, idx) => (
          <ProductCard
            key={idx}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            img={product.image}
            addToCartCount={props.addToCart}
          />
        ))
      ) : (
        <Spinner />
      )}

    </div>
  );
};

export default ProductList;
