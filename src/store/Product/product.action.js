// Create All Action Here 


// get product
const getProduct = (payload) => ({
    type: "GET_PRODUCT",
    payload
});
const sagaGetProduct = (payload) => ({
    type: "SAGA_GET_PRODUCT",
    payload
});

// get category 
const getCategory = (payload) => ({
    type: "GET_CATEGORY",
    payload
});
const sagaGetCategory = (payload) => ({
    type: "SAGA_GET_CATEGORY",
    payload
});


// Search Product
const searchProduct = (payload) => ({
    type: "PRODUCT_SEARCH",
    payload: payload
});

const sagaSearchProduct = (payload) =>({
    type: "SAGA_PRODUCT_SEARCH",
    payload:payload
})


//  If You Want To Export A function Add  Here
export {
    getProduct,
    searchProduct,
    getCategory,
    sagaGetCategory,
    sagaGetProduct,
    sagaSearchProduct
};
