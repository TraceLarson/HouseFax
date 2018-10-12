import {GET_LIKES} from '../actions/types'

const initialState = {
	likes: 0
}

export default function(state = initialState, action){
	switch (action.type) {
		case GET_LIKES:
			return Object.assign({}, state, action.payload)
		default:
			return state
	}

}