import {GET_CRIMES} from '../actions/types'

const initialState = {

}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CRIMES:
			return console.log('crimeListReducer running') /*Object.assign({}, state, action.payload)*/
		default:
			return state
	}
}