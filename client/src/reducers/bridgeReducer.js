import {GET_LISTINGS} from '../actions/types'

let listings = localStorage.getItem('listings') /*&& JSON.parse(localStorage.getItem('listings'))*/
let initialState = listings || {}


export default function (state = initialState, action) {
	switch (action.type) {
		case GET_LISTINGS:
			return Object.assign({}, state, action.payload)
		default:
			return state
	}
}