import axios from 'axios'
import {GET_ERRORS, GET_ALL_LISTINGS} from './types'

export const getAllListings = () => dispatch => {
	axios.get('/api/bridge')
		.then(response => {
			console.log('listing data: ', response.data)
			// dispatch({
			// 			// 	action: GET_ALL_LISTINGS,
			// 			// 	payload: res.data
			// 			// })
		})
		.catch(err => {
			console.log('error getAllListings: ', err)
		})
}