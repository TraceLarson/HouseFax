import axios from 'axios'
import {GET_ERRORS, GET_LISTINGS} from './types'

export const getListings = (query) => dispatch => {
	axios.post('/api/bridge',{location: query})
		.then(response => {
			console.log('listing data: ', response.data)
			dispatch({
				type: GET_LISTINGS,
				payload: response.data
			})
		})
		.catch(err => {
			console.error('Error calling bridge API', err)
		})
}