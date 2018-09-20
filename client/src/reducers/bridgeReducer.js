import {GET_ALL_LISTINGS} from '../actions/types'

const initialState = {
	listings: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ALL_LISTINGS:
			return {
				...state,
				listings: [action.payload]
			}
		default:
			return state
	}
}