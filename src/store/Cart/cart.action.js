const addToCart = (payload) => {
    return ({
        type: "ADD_TO_CART",
        payload: payload
    })
}
const sagaAddToCart = (payload) => {
    // console.log({ payloadAction: payload })
    return ({
        type: "SAGA_ADD_TO_CART",
        payload: payload
    })
}



const removeProducts = (payload) => {
    return ({
        type: "REMOVE_PRODUCT",
        payload: payload
    })
}

const sagaRemoveProducts =  (payload)=>{
    return ({
        type:"SAGA_REMOVE_PRODUCT",
        payload:payload
    })
}

export {
    addToCart,
    sagaAddToCart,
    removeProducts,
    sagaRemoveProducts
}