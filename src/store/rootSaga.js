import { all } from "redux-saga/effects";
import { getCategorySaga, productsSagas, searchProdSaga } from "./Product/product.saga.js";
import { cartsSagas, removeCartSagas } from './Cart/cart.saga';
import { wishlistSagas } from "./Wishlist/wishlist.saga.js";

function* rootSaga() {
    yield all([
        productsSagas(),
        searchProdSaga(),
        cartsSagas(),
        wishlistSagas(),
        removeCartSagas(),
        getCategorySaga()
    ]);
}

export default rootSaga;

