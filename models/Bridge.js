const axios = require('axios')



class Bridge {
	static getAllListings() {
		return (
			axios.get(process.env.BRIDGE_API_ENDPOINT, {
				method: "GET",
				params: {
					access_token: process.env.BRIDGE_API_SERVER_TOKEN,
				}
			})
				.then(response => {
					let bridgeArray = []
					console.log(response)
					response.data.bundle.map(listing => {
						bridgeArray.push(listing)
					})
					return bridgeArray
				})
				.catch(err => {
					console.error('error fetching MLS', err)
				})
		)
	}

	static getNearbyListings(query){
		return (
			axios.get(process.env.BRIDGE_API_ENDPOINT, {
				method: "GET",
				params: {
					access_token: process.env.BRIDGE_API_SERVER_TOKEN,
					near: query,
					radius: 0.5
				}
			})
				.then(response => {
					console.log(' ')
					console.log('********************')
					console.log('getNearbyListings response')
					console.log(response.data)
					console.log('********************')
					console.log(' ')
					return response.data
				})
				.catch(err => {
					console.log(' ')
					console.log('********************')
					console.log('getNearbyListings error:')
					console.error('error fetching cluster from MLS', err)
					console.log('********************')
					console.log(' ')


				})
		)
	}
}


module.exports = Bridge