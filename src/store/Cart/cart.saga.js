import { put, takeLatest } from "redux-saga/effects";

function* addToCartSaga(action) {

  yield put({
    type: "ADD_TO_CART",
    payload: action.payload
  });

  // const response = yield call()
}
function* removeProductSaga(action) {

  yield put({
    type: "REMOVE_PRODUCT",
    payload: action.payload
  });

  // const response = yield call()
}

export function* cartsSagas() {
  yield takeLatest("SAGA_ADD_TO_CART", addToCartSaga);
  
}
export function* removeCartSagas(){
  yield takeLatest("SAGA_REMOVE_PRODUCT", removeProductSaga)
}
