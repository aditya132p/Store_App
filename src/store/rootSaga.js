import { all } from "redux-saga/effects";
import { productsSagas, searchProdSaga } from "./Product/product.saga.js";
import { cartsSagas, removeCartSagas } from './Cart/cart.saga';
import { wishlistSagas } from "./Wishlist/wishlist.saga.js";

function* rootSaga() {
    yield all([
        productsSagas(),
        searchProdSaga(),
        cartsSagas(),
        wishlistSagas(),
        removeCartSagas()
        
    ]);
}

export default rootSaga;

