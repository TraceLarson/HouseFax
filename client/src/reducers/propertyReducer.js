import {GET_LIKES} from '../actions/types'

const initialState = {
	Likes: 0
}

export default function(state = initialState, action){
	switch (action.type) {
		case GET_LIKES:
			let newObject = Object.assign({},  action.payload)
			console.log(`propertyReducer object: ${action.payload}`)
			// return (Object.assign({}, state, action.payload))
			return {...state, Likes: action.payload}
		default:
			return state
	}

}