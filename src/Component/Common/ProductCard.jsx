import { Heart, ShoppingCart } from 'lucide-react'


const ProductCard = (props) => {
  /* eslint-disable react/prop-types */
  const { addToCartCount } = props
  const productData = {
    id: props.id,
    title: props.title,
    subtitle: props.category,
    image: props.img,
    category: props.description,
    price: props.price,

  }
  return (
    <>
      <div className="bg-slate-50 py-2 rounded-xl w-full h-96 overflow-hidden drop-shadow-sm hover:drop-shadow-sm duration-100">
        <div className="h-3/6 w-full overflow-hidden">
          <img
            className="w-full object-contain mix-blend-multiply hover:scale-105 transition-transform ease-in duration-300 h-full"
            src={props.img}
            alt={props.title}
          />
        </div>

        <div className="px-2 h-3/6 py-3 flex flex-col w-full justify-between ">
          <span className="text-red-700 font-semibold capitalize ">
            {props.category}
          </span>
          <h1 className="title text-lg leading-none font-medium text-gray-700">
            {props.title}
          </h1>
          <h2 className="subtitle text-sm font-medium text-gray-500">
            {props.subtitle}
          </h2>
          <h3 className="variety font-medium text-gray-400">Color 1</h3>
          <span className="text-xl font-bold text-black">
            MRP : ₹ {props.price * 83}
          </span>
          <div className="flex w-full ">
            <button className="w-full flex px-2 items-center justify-center gap-2 py-2 bg-black rounded-lg text-slate-50 font-semibold mr-3" >
              <Heart className='text-red-400' fill='rgb(248 113 113)' size={18} /> Wishlist
            </button>
            <button className="w-full py-2 px-1 flex items-center justify-center gap-2 bg-black rounded-lg text-slate-50 font-semibold mr-3" onClick={() => addToCartCount(productData)}>
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
