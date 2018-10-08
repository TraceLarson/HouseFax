import axios from 'axios'
import {GET_CURRENT_USER} from './types'

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