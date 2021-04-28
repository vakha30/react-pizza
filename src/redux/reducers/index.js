import { combineReducers } from 'redux'
import pizzas from './pizzas'
import filter from './filter'
import images from './images'
import cart from './cart'


const rootReducer = combineReducers({
    pizzas,
    filter,
    images,
    cart
})

export default rootReducer;