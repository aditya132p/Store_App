const initialState = {
    productsCart: [],
};

const cartReducer = (state = initialState, action) => {
    // console.log(state.productsCart);

    switch (action.type) {
        case "ADD_TO_CART":
            // Check if the product already exists in the cart
            // console.log("------------", action.payload)
            return {
                ...state,
                productsCart: [...state.productsCart, action.payload]
            };
        case "REMOVE_PRODUCT":
            // Remove Product  
            return {
                ...state,
                productsCart: state.productsCart.filter((item) => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
