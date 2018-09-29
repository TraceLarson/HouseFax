import {GET_CRIMES} from '../actions/types'

let recentCrime = localStorage.getItem('recentCrimeList') && JSON.parse(localStorage.getItem('recentCrimeList'))
const initialState = recentCrime ? recentCrime: {}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CRIMES:
			localStorage.setItem('recentCrimeList',JSON.stringify(Object.assign({}, state, action.payload)))
			return (
				Object.assign({}, state, action.payload)
			)
		default:
			return state
	}
}