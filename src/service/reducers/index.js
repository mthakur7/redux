
import {combineReducers} from 'redux' //to mrge all reducers
import cardItems from './reducer'

export default combineReducers({
    cardItems,
})

// if there many reducers
// export default combineReducers({
//     cardItems,
//       reducer2,
//      reducer3,
// })
