import axios from 'axios'
import {GET_CURRENT_USER, UPDATE_CURRENT_USER} from './types'

export const getCurrentUser = () => dispatch => {
	axios.get('/user/me')
		.then(response => {
			console.log('getCurrentUser ',response.data)
			dispatch({
				type: GET_CURRENT_USER,
				payload: response.data
			})
		})
}

export const updateCurrentUser = (user, history) => dispatch => {
	console.log('updateCurrentUser', user)
	// axios.put()
	// 	.then(response => {
	// 		console.log('updateCurrentUser action ran')
	// 	})
}