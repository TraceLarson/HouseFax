import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import bridgeReducer from './bridgeReducer'
import currentListingReducer from "./currentListingReducer";
import crimeListReducer from './crimeListReducer'

export default combineReducers({
	errors: errorReducer,
	auth: authReducer,
	listings: bridgeReducer,
	currentListing: currentListingReducer,
	recentCrimes: crimeListReducer
})