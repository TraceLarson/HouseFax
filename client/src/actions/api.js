import axios from 'axios'
import {GET_ERRORS, GET_LISTINGS} from './types'

export const getListings = (query, history) => dispatch => {
	axios.post('/api/bridge',{location: query})
		.then(response => {
			console.log('listing data: ', response.data)
			history.push('/Results')
			dispatch({
				type: GET_LISTINGS,
				payload: response.data
			})
		})
		.catch(err => {
			console.error('Error calling bridge API', err)
		})
}