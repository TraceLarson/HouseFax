import axios from 'axios'
import {GET_ERRORS, GET_ALL_LISTINGS} from './types'

export const getAllListings = () => dispatch => {
	axios.get('/api/bridge')
		.then(response => {
			console.log('listing data: ', response.data)
			dispatch({
				type: GET_ALL_LISTINGS,
				payload: response.data
			})
		})
		.catch(err => {
			console.error('Error calling bridge API', err)
		})
}