import {GET_CRIMES} from '../actions/types'

let recentCrime = localStorage.getItem('recentCrimeList') && JSON.parse(localStorage.getItem('recentCrimeList'))
let initialState = recentCrime || {}


export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CRIMES:
			return (
				Object.assign({}, state, action.payload)
			)
		default:
			return state
	}
}