import axios from 'axios'
import {GET_LISTINGS, SET_CURRENT_LISTING, GET_CRIMES, GET_ERRORS} from './types'
// import {getLikes} from './property'

export const getListings = (query, history) => dispatch => {
	const errors = {}
	axios.post('/api/bridge',{location: query})
		.then(response => {
			console.log(' ')
			console.log('********************')
			console.log(`getListings ACTION response code: ${response.status}`)
			console.log(`getListings ACTION response data: ${response.data && response.data}`)
			console.log(`getListings ACTION response bundle size: ${response.data.bundle && response.data.bundle.length}`)
			console.log('********************')
			console.log(' ')
			if(response.data.bundle.length !== 0 && response.data !== undefined) {
				console.log(`*********\r\n getListings ACTION response approved \r\n ${response.data.bundle}\r\n**********`)
				// bundle is an array
				response && localStorage.setItem('listings', JSON.stringify(response.data.bundle))
				dispatch({
					type: GET_LISTINGS,
					payload: response.data.bundle
				})
				dispatch({
					type: GET_ERRORS,
					payload: {}
				})
				history.push('/Results')
			}
			else {
				console.log(' ')
				console.log('********************')
				console.log('getListings ACTION response')
				console.error('No Results')
				console.log('********************')
				console.log(' ')
				localStorage.removeItem('listings')
				// dispatch({
				// 	type: GET_LISTINGS,
				// 	payload: [0]
				// })

				dispatch({
					type: GET_ERRORS,
					payload: errors.error = 'Found 0 Search Results'
				})
				history.push('/Results')
			}

		})
		.catch(err => {
			console.error('getListings ACTION ERROR calling bridge API', err)
			localStorage.removeItem('listings')
			dispatch({
				type: GET_ERRORS,
				payload: errors.error='Invalid Query or Bridge responded with an error'
			})
			history.push('/Results')
		})
}

export const setCurrentListing = (listing, history) => dispatch => {
	history.push('/Details')
	// console.log(listing)
	listing && localStorage.setItem('currentListing' , JSON.stringify(listing))
	dispatch({
		type: SET_CURRENT_LISTING,
		payload: listing
	})
}

export const getCrimesList = (latitude, longitude, listingId) => dispatch => {
	console.log(latitude, longitude)
	axios.post('/api/crime', {
		lat: latitude,
		lng: longitude
	})
		.then(response => {
			console.log('getCrimesList: ', response.data)
			response.data && localStorage.setItem('recentCrimeList',JSON.stringify(Object.assign({}, response.data)))
			dispatch({
				type: GET_CRIMES,
				payload: response.data
			})
		})
		// .then(() => {
		// 	dispatch(getLikes(listingId))
		// })
		.catch(err => {
			console.error('Error retrieving crimes for this location', err)
		})
}