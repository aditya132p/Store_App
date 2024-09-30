// Write your reducer in Switch Case Statment 


const initialState = {
    products: [],
    error: null,  // To track any errors from the saga
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return {
                ...state,
                products: action.payload,
                error: null,  // Clear error on success
            };

        case "GET_PRODUCT_FAILURE":
            return {
                ...state,
                error: action.payload,  // Store the error
            };

        case "PRODUCT_SEARCH":
            return {
                ...state,
                products: action.payload,  // Store the update state by search 
            };

        default:
            return state;
    }
};

export default productReducer;
