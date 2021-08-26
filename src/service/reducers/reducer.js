import { ADD_TO_CART,REMOVE_FROM_CART } from '../constants'
//u can give any name to initialState variable
const initialState = {
    cardData: []//this arrays saves our data
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer",action,state)
            return [
                ...state,
                {cardData: action.data}
            ]

            case REMOVE_FROM_CART:
               state.pop();
                return [
                    ...state,
                   
                ]

        default:
            return state
    }


}