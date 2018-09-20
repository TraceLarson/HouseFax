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

	static getListingCluster(query){
		return (
			axios.get(process.env.BRIDGE_API_CLUSTER_ENDPOINT + query, {
				method: "GET",
				params: {
					access_token: process.env.BRIDGE_API_SERVER_TOKEN
				}
			})
				.then(response => {
					let cluster = []
					console.log(JSON.stringify(response.data.bundle))
					response.data.bundle.map(listing => {
						cluster.push(listing)
					})
					return cluster
				})
				.catch(err => {
					console.log('error fetching cluster from MLS', err)
				})
		)
	}
}


module.exports = Bridge