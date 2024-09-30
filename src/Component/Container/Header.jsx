import { Heart, ShoppingCart } from 'lucide-react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput';


import { connect } from 'react-redux';
const Header = (props) => {
  const { handelLogout } = props;
  /* eslint-disable react/prop-types */
  return (
    <div className="fixed z-30 backdrop-blur-lg w-full  py-3 drop-shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/"
          href="#"
          className="text-sm font-semibold flex gap-1 text-gray-800 hover:text-gray-900"
        >
          <div className="inline-flex items-center space-x-2">
            <span>

              <img src="logo.svg" className='w-9' alt="Flux market" />
            </span>
            <span className="font-bold text-lg text-gray-700">Flux Market</span>
          </div>
        </Link>
        <div className="hidden grow items-center justify-center lg:flex">
          <ul className="ml-12 inline-flex items-center justify-center space-x-8">


            <li>
              <Link
                to={"/Cart"}
                className="text-sm font-semibold flex gap-1 text-gray-800 hover:text-gray-900"
              >
                <ShoppingCart size={18} /> Cart <sup className='mt-2 text-red-400'>{props.cart.length}</sup>
              </Link>
            </li>
            <li>
              <Link to="/wishlist"
                className="text-sm font-semibold flex gap-1 text-gray-800 hover:text-gray-900"
              >
                <Heart size={18} /> Wishtlist
              </Link>
            </li>
          </ul>

        </div>
        <div className="hidden lg:flex items-center gap-2">
          <SearchInput />
          {
            props.isLogedin
              ? <div>
                <a href="#" className=" text-white px-5 py-1.5 bg-black rounded-lg font-semiboldhover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors ease-in">👋 Hello, {props.username}❤️</a>
                <a href="#" onClick={handelLogout} className=" text-white px-5 py-1.5 ml-3 bg-black rounded-lg font-semiboldhover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors ease-in">Logout</a>
              </div> :
              <>
                <Link to="/Login"
                  className="rounded-md bg-black px-5 py-1.5 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Login
                </Link>
              </>

          }

        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"

            className="h-6 w-6 cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  )
}
Header.propTypes = {
  isLogedin: PropTypes.bool.isRequired,
  username: PropTypes.string,
  // cartCount: PropTypes.any,
};

const mapStateToProps = state => {
  return {
    cart: state.cartItems.productsCart
  }
}

export default connect(mapStateToProps)(Header)
// export default Header