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
		.catch(err => {
			console.error(`getCurrentUser: ${err}`)
			if(err.response.status === 401){
				window.location.href = `/Login`
			}
		})
}

export const updateCurrentUser = (user, history) => dispatch => {
	console.log('updateCurrentUser', user)
	axios.put(`/user/${user._id}`,{user})
		.then(response => {
			console.log('updateCurrentUser action ran', response)
			history.push('/Profile')
		})
		.catch(err => {
			console.error(`updateCurrentUser: ${err}`)
			if(err.response.status === 401){
				window.location.href = `/Login`
			}
		})
}