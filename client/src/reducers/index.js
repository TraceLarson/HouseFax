import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import bridgeReducer from './bridgeReducer'

export default combineReducers({
	errors: errorReducer,
	auth: authReducer,
	bridge: bridgeReducer
})