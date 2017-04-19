import {
    combineReducers
} from 'redux'
import {
    routerReducer
} from "react-router-redux"

import authReducer from './reducer/auth'
export default combineReducers({
    routing:routerReducer,
    authReducer,
})
