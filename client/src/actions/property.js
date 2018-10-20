import axios from 'axios'
import {GET_LIKES} from './types'

export const getLikes = (listingId) => dispatch => {
	axios.get(`/property/${listingId}/likes`)
		.then(response => {
			console.log(`****** \r\n getLikes ACTION:\r\n response ${response.data} \r\n ******`)
				dispatch({
				type: GET_LIKES,
				payload: response.data
			})

		})
		.catch(err => {
			console.error(`******\r\n getLikes ACTION ERROR:\r\n retrieving likes on property ${err.message}\r\n********`)
		})
}

export const addProperty = (currentListing) => dispatch => {
	axios.post('/property', {
		listingId: currentListing.ListingId,
		address: currentListing.UnparsedAddress,
		city: currentListing.City,
		state: currentListing.StateOrProvince,
		likes: null // TODO: get likes from database
	})
		.then(response => {
			console.log('addProperty action: ', response)
		})
		.catch(err => {
			console.error(`addProperty action: Error created property ${err}`)
		})
}

export const updateLikes = (listingId) => dispatch => {
	axios.put(`/property/${listingId}/likes`)
		.then(response => {
			console.log('handleLikeButton axios PUT: ',response)
		})
		.catch(err => {
			console.error('axios error liking property', err.response.status)
		})
}
