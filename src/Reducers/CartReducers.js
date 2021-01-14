const initialState = {

    cart:[],
    

}

export const CartReducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case "ADD_PRODUCT":
        return { ...state, cart:[...state.cart,payload] }

    default:
        return state
    }
}
