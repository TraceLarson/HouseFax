import axios from 'axios'
import {GET_LISTINGS, SET_CURRENT_LISTING, GET_CRIMES} from './types'
import {getLikes} from './property'

export const getListings = (query, history) => dispatch => {
	axios.post('/api/bridge',{location: query})
		.then(response => {
			localStorage.setItem('listings' , JSON.stringify(response.data.bundle))
			dispatch({
				type: GET_LISTINGS,
				payload: response.data.bundle
			})
		})
		.then(() => {
			history.push('/Results')
		})
		.catch(err => {
			console.error('Error calling bridge API', err)
		})
}

export const setCurrentListing = (listing, history) => dispatch => {
	history.push('/Details')
	// console.log(listing)
	localStorage.setItem('currentListing' , JSON.stringify(listing))
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
			localStorage.setItem('recentCrimeList',JSON.stringify(Object.assign({}, response.data)))
			dispatch({
				type: GET_CRIMES,
				payload: response.data
			})
		})
		.then(() => {
			dispatch(getLikes(listingId))
		})
		.catch(err => {
			console.error('Error retrieving crimes for this location', err)
		})
}