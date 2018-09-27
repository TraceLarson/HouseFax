import axios from 'axios'
import {GET_LISTINGS, SET_CURRENT_LISTING, GET_CRIMES} from './types'

export const getListings = (query, history) => dispatch => {
	axios.post('/api/bridge',{location: query})
		.then(response => {
			history.push('/Results')
			dispatch({
				type: GET_LISTINGS,
				payload: response.data.bundle
			})
		})
		.catch(err => {
			console.error('Error calling bridge API', err)
		})
}

export const setCurrentListing = (listing, history) => dispatch => {
	history.push('/Details')
	console.log(listing)
	localStorage.setItem('currentListing' , JSON.stringify(listing))
	dispatch({
		type: SET_CURRENT_LISTING,
		payload: listing
	})
}

export const getCrimesList = (latitude, longitude) => dispatch => {
	console.log(latitude, longitude)
	axios.post('/api/crime', {
		lat: latitude,
		lng: longitude
	})
		.then(response => {
			console.log('getCrimesList: ', response.data)
			dispatch({
				type: GET_CRIMES,
				payload: response.data
			})
		})
		.catch(err => {
			console.error('Error retrieving crimes for this location', err)
		})
}