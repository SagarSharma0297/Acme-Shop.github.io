export const addItemToCart = (payload) => ({

    type: "ADD_PRODUCT",
    payload
})

export const removeItemFromCart = (payload) => ({
    type: "REMOVE_PRODUCT",
    payload
})

export const hideCart1 = (payload) => ({
    type: "CHANGE_HIDE_CART",
    payload
})

export const visibleCart1 = (payload) => ({
    type: "CHANGE_HIDE_CART_TO_SHOW",
    payload
})


