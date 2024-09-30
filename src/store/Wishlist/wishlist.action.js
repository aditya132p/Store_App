const addWishlist = (payload) => ({
    type: "ADD_TO_WISHLIST",
    payload:payload
});
const sagaAddWishlist = (payload) => ({
    type: "SAGA_ADD_TO_WISHLIST",
    payload
});

export {
    addWishlist,
    sagaAddWishlist
}