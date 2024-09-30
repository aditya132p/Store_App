
const initialState = {
    wishlistCart: [],
};

const wishlistReducer = (state = initialState , action)=>{

    switch (action.type) {
        case "ADD_TO_WISHLIST":
            console.log("actionnnnn",state)
           return {
               wishlistCart:[...state.wishlistCart, action.payload]
           };
    
        default:
            return state;
    }

}
export default wishlistReducer