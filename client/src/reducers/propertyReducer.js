import {GET_LIKES} from '../actions/types'

const initialState = {
	Likes: 0
}

export default function(state = initialState, action){
	switch (action.type) {
		case GET_LIKES:
			console.log(`******\r\n GET_LIKES propertyReducer\r\n object: ${action.payload}\r\n*******`)
			// return (Object.assign({}, state, action.payload))
			return {...state, Likes: action.payload}
		default:
			return state
	}

}