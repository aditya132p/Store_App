import { Heart, ShoppingCart } from 'lucide-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sagaAddToCart } from '../../store/Cart/cart.action';
import { useNavigate } from 'react-router-dom';
import { sagaAddWishlist } from '../../store/Wishlist/wishlist.action';
import { toast,Bounce } from 'react-toastify';

const ProductCard = (props) => {
  /* eslint-disable react/prop-types */
  const productData = {
    id: props.id,
    title: props.title,
    subtitle: props.category,
    image: props.img,
    category: props.description,
    price: props.price,
  }
  
  // const { addToCartCount, productClick } = props;
  let navigate = useNavigate()

  const handelAddToCart = () => {
  
    let check = props.cart.some(value => value.id === productData.id)
    if (check) {
      toast.warn('Product already exist in your Cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return
    }
    else {
      // console.log(props.cart)
      props.addToCart(productData)
    }
  }

  const handelAddToWishlist = () => {
    let check = props.wishlist.some(value => value.id === productData.id)
    // console.log(check, productData)
    if (check) {
      
      toast.warn('🦄Same product already exist in your wishlist', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return
    }
    else {
      // console.log(props.wishlist)
      props.addToWishlist(productData)
    }
  }
  
  return (
    <>
      <div className="bg-slate-50 py-2 rounded-xl w-full h-96 overflow-hidden drop-shadow-sm hover:drop-shadow-sm duration-100">
        <div className="h-3/6 w-full overflow-hidden" onClick={() => navigate(`/product/${props.id}`)}>
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
          <h1 className="title text-lg leading-none font-medium text-gray-700" onClick={() => productClick(productData.id)}>
            {props.title}
          </h1>
          <h2 className="subtitle text-sm font-medium text-gray-500">
            {props.subtitle}
          </h2>
          <h3 className="variety font-medium text-gray-400">Color 1</h3>
          <span className="text-xl font-bold text-black">
            MRP : ₹ {props.price * 20}
          </span>
          <div className="flex w-full ">
            <button className="w-full flex px-2 items-center justify-center gap-2 py-2 bg-black rounded-lg text-slate-50 font-semibold mr-3" 
            onClick={handelAddToWishlist} >
              <Heart className='text-red-400' fill='rgb(248 113 113)' size={18} /> Wishlist
            </button>
            <button className="w-full py-2 px-1 flex items-center justify-center gap-2 bg-black rounded-lg text-slate-50 font-semibold mr-3"
              onClick={handelAddToCart}>
              {/* () => props.addToCart(productData) */}
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    cart: state.cartItems.productsCart,
    wishlist: state.wishlist.wishlistCart
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addToCart: sagaAddToCart,
    addToWishlist: sagaAddWishlist
  },
    dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
