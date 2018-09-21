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
					console.log('error fetching MLS', err)
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
					return response.data
				})
				.catch(err => {
					console.log('error fetching cluster from MLS', err)
				})
		)
	}
}


module.exports = Bridge