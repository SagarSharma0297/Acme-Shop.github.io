import { createStore } from "redux";
import { CartReducer } from '../Reducers/CartReducers'

const ConfigureStore = () => {
    const store = createStore(CartReducer);
    return (store);
}
 
export default ConfigureStore;