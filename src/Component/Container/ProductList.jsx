import ProductCard from "../Common/ProductCard";
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Spinner from "../Common/Spinner";
import { useSelector } from "react-redux";


const ProductList = () => {
  const [products, setproduct] = useState([])
  let storProduct = useSelector(state => state.product.products)

  useEffect(() => {
    setproduct(storProduct)
  }, [storProduct])

  //  console.log("product list",demo)
  // https://api.escuelajs.co/api/v1/products
  // https://fakestoreapi.com/products
  // <ProductCard
  //   key={idx}
  //   id={product.category.id}
  //   title={product.title}
  //   price={product.price}
  //   description={product.description}
  //   category={product.category.name}
  //   img={product.images[1]}
  //   addToCartCount={props.addToCart}
  // />
  // <ProductCard
  //   key={idx}
  //   id={product.id}
  //   title={product.title}
  //   price={product.price}
  //   description={product.description}
  //   category={product.category}
  //   img={product.image}
  //   addToCartCount={props.addToCart}
  //   productClick={props.handleProductClick}
  //     singleProduct = { props.getSingleProduct }
  // />

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
              category={product.category.name}
              img={product.images[1]}
            />
        ))
      ) : (
        <Spinner />
      )}

    </div>
  );
};

export default ProductList;
