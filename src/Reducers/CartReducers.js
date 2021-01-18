const initialState = {

    cart:[],
    showCart:'100%'
    

}

export const CartReducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case "ADD_PRODUCT":
        return { ...state, cart:[...state.cart,payload] }

    case "REMOVE_PRODUCT":
        for(let i=0;i<state.cart.length;i++){
            if(state.cart[i].id===payload){
                state.cart.splice(i,1)
            }
        }
        return { ...state, cart:[...state.cart]}


    case "CHANGE_HIDE_CART":
        return { ...state, showCart:'100%'}

    case "CHANGE_HIDE_CART_TO_SHOW":
        return { ...state, showCart:'65%'}

    default:
        return state
    }
}
