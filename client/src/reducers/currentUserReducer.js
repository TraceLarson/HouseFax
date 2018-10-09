import {GET_CURRENT_USER} from '../actions/types'

const initialState ={
	currentUser: {}
}

export default function (state = initialState, action) {
	switch (action.type){
		case GET_CURRENT_USER:
			console.log('currentUserReducer ',action.payload)
			return Object.assign({}, state, action.payload)
		default:
			return state

	}

}