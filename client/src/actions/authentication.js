import axios from 'axios'
import {GET_ERRORS} from './types'

export const registerUser = (user, history) => dispatch => {
	axios.post('/user', user)
		.then(res => history.push('/Login'))
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		})
}

export const loginUser = (user) => dispatch => {
	axios.post('/user/login', user)
		.then(res => {
			console.log(res.data)
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		})
}