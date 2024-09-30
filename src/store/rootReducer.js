import { combineReducers } from "redux";
import CartReducer from './Cart/cart.reducer.js'
import productReducer from "./Product/product.reducer.js";
import wishlistReducer from "./Wishlist/wishlist.reducer.js";


const rootReducers = combineReducers({
    cartItems: CartReducer,
    product: productReducer,
    wishlist:wishlistReducer
});

export default rootReducers;
