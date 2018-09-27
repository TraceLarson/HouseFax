import {GET_CRIMES} from '../actions/types'

let recentCrime = localStorage.getItem('recentCrimeList') && localStorage.getItem('recentCrimeList')
const initialState = recentCrime ? JSON.parse(recentCrime) : {}

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