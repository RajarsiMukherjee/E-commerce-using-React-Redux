import { ADD_DATA } from "./Action"

const initState = {
  
    ShippingData: [],
     
};


export const shippingReducer = (store = initState, { type, payload }) => {
    console.log("shiiiiii", store)
    switch (type) {
        

        case ADD_DATA:
            return { ...store, ShippingData:payload };

        default:
            return store;
    }
}