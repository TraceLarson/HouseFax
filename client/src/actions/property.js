import axios from 'axios'

export const addProperty = (currentListing) => {
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