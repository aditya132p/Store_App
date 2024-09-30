import { put, takeLatest } from "redux-saga/effects";

function* addToWishlistSaga(action) {

    yield put({
        type: "ADD_TO_WISHLIST",
        payload: action.payload
    });

    // const response = yield call()
}

export function* wishlistSagas() {
    yield takeLatest("SAGA_ADD_TO_WISHLIST", addToWishlistSaga);
}
