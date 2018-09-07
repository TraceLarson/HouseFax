const axios = require('axios')



class Bridge {
	static getListing() {
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
}

module.exports = Bridge