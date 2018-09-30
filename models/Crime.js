const axios = require('axios')



class Crime {
	static getCrime(lat, lng) {
		return (
			// Get occurences within 1000m of location
			axios.get(process.env.CRIME_API_ENDPOINT, {
				method: "GET",
				headers: {
					$$app_token: process.env.CRIME_API_APP_TOKEN,
				},
				params: {
					$where: `within_circle(location,${lat}, ${lng}, 1000)`,
					$order: 'occ_date DESC',
					$limit: 10,
				}
			})
				.then(response => {
					let crimeArray = []
					console.log(response)
					response.data.map(occurence => {
						crimeArray.push(occurence)
					})
					return crimeArray
				})
				.catch(err => {
					console.log('error fetching CRIME', err)
				})
		)
	}
}

module.exports = Crime