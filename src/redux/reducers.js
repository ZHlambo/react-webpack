import {
    combineReducers
} from 'redux'
import {
    routerReducer
} from "react-router-redux"

import authReducer from './reducer/auth'
import catReducer from './reducer/cat'
import txtReducer from './reducer/txt'
import msgReducer from './reducer/msg'

export default combineReducers({
    routing:routerReducer,
    authReducer,
    catReducer,
    txtReducer,
    msgReducer,
})
