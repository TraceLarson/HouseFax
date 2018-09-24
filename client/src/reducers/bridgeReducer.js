import {GET_LISTINGS} from '../actions/types'

const initialState = {

}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_LISTINGS:
			return Object.assign({}, state, action.payload)
		default:
			return state
	}
}