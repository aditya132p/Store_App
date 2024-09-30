import { put, takeLatest, call } from "redux-saga/effects";
import productResponse, { searchProduct } from "./product.api";

function* getProductSaga() {
    try {
        // intitate loader
        const response = yield call(productResponse);
        yield put({
            type: "GET_PRODUCT",
            payload: response
        });
        // close loader
    } catch (error) {
        // Handle the error, e.g., dispatch an error action
        yield put({
            type: "GET_PRODUCT_FAILURE",
            payload: error.message,
        });
    }
}

function* searchProductSaga(action){
    const response = yield call(searchProduct,action.payload)
    console.log(response)
    yield put({
        type:"PRODUCT_SEARCH",
        payload:response
    })
}

export function* productsSagas() {
    yield takeLatest("SAGA_GET_PRODUCT", getProductSaga);
   
}
export function* searchProdSaga (){
    yield takeLatest("SAGA_PRODUCT_SEARCH", searchProductSaga);
}
