import { DATA_LOADING, DATA_SUCCESS, DATA_FAILURE, ADD_CART,DELETE_ITEM_CART, EMPTY_CART } from "./Action"

const initState = {
    loading: false,
    error: false,
    data: [],
    cart: [],
     
};


export const cartReducer = (store = initState, { type, payload }) => {
    console.log("storeeee", store)
    switch (type) {
        case DATA_LOADING:
            return { ...store, loading: true };

        case DATA_SUCCESS:
            return { ...store, loading: false, todos: [...payload], error: false };

        case DATA_FAILURE:
            return { ...store, loading: false, error: true, todos: [] };

        case ADD_CART:
            return { ...store, cart: [...store.cart, payload] };

        case DELETE_ITEM_CART:
            const AfterDeleteCart = store.cart.filter((el) => el.id !== payload)
            return { ...store, cart : AfterDeleteCart }; 

            case EMPTY_CART:
            return { ...store, cart: [] };

        default:
            return store;
    }
}