import {GET_LISTINGS} from '../actions/types'

let listings = localStorage.getItem('listings') && localStorage.getItem('listings')
const initialState = listings ? JSON.parse(listings) : {}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_LISTINGS:
			return Object.assign({}, state, action.payload)
		default:
			return state
	}
}