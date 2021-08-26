import {ADD_TO_CART,REMOVE_FROM_CART} from '../constants'

//to add
export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data//data to be sent to store, data word writeen before : can have any name{generally payload}, and data after: is the parameter data 
    }
}

//to remove
export const removeFromCart =()=>{
    // console.warn("action",data)
    return {
        type:REMOVE_FROM_CART,
       
    }
}