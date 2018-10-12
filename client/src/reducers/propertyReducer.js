import {GET_LIKES} from '../actions/types'

const initialState = {
	Likes: 0
}

export default function(state = initialState, action){
	switch (action.type) {
		case GET_LIKES:
			console.log(`propertyReducer Likes: ${action.payload}`)
			return action.payload
		default:
			return state
	}

}