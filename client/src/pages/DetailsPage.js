import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
	Container
} from 'reactstrap'

import DetailsBanner from '../components/DetailsBanner'
import DetailsImage from "../components/DetailsImage";
import AgentContactForm from "../components/AgentContactForm";
import FamilyFriendlyRating from "../components/FamilyFriendlyRating";
import RecentCrimeReports from "../components/RecentCrimeReports";
import PropertyDetails from "../components/PropertyDetails";

import {getCrimesList} from '../actions/api'
import {addProperty, updateLikes, getLikes} from '../actions/property'


class DetailsPage extends Component {

	state = {
		listing: {},
		crimeList: {},
		likes: 0
	}

	componentDidMount() {
		// console.log('DetailsPage componentWillMount current listing:', this.props.currentListing)
		// console.log(this.props.currentListing.Latitude, this.props.currentListing.Longitude)
		// console.log('DetailsPage componentWillMount recent crime:', this.props.recentCrimes)

		let latitude = this.props.currentListing.Latitude
		let longitude = this.props.currentListing.Longitude
		this.props.getCrimesList(latitude, longitude)
		this.props.getLikes(this.props.currentListing.ListingId)

	}


	// componentDidUpdate(prevProps) {
	// 	if (this.props.currentListing !== prevProps.currentListing){
	// 		console.log('componentDidUpdate ran')
	// 		let latitude = this.props.currentListing.Latitude
	// 		let longitude = this.props.currentListing.Longitude
	// 		this.props.getCrimesList(latitude, longitude)
	// 	}
	// }

	handleLikeButton = e => {
		e.preventDefault()
		console.log('pressed like button')
		this.props.addProperty(this.props.currentListing)
		this.props.updateLikes(this.props.currentListing.ListingId)
		this.props.getLikes(this.props.currentListing.ListingId)

	}

	// addProperty = () => {
	// 	axios.post('/property', {
	// 		listingId: this.props.currentListing.ListingId,
	// 		address: this.props.currentListing.UnparsedAddress,
	// 		city: this.props.currentListing.City,
	// 		state: this.props.currentListing.StateOrProvince,
	// 		likes: null // TODO: get likes from database
	// 	})
	// 		.then(response => {
	// 			console.log('handleLikeButton axios POST: ', response)
	// 		})
	// 		.catch(err => {
	// 			console.error(`handleLikeButton: Error created property ${err}`)
	// 		})
	// }

	// getLikes = () => {
	// 	axios.get(`/property/${this.props.currentListing.ListingId}/likes`)
	// 		.then(response => {
	// 			console.log(`getLikes: ${response.data}`)
	// 			this.setState({
	// 				likes: response.data
	// 			})
	//
	// 		})
	// 		.catch(err => {
	// 			console.error(`error retrieving likes on property ${err.response.data}`)
	// 		})
	// }

	// updateLikes = () => {
	// 	axios.put(`/property/${this.props.currentListing.ListingId}/likes`)
	// 		.then(response => {
	// 			console.log('handleLikeButton axios PUT: ',response)
	// 			this.getLikes()
	// 		})
	// 		.catch(err => {
	// 			console.error('axios error liking property', err.response.status)
	// 		})
	// }



	render() {
		const {currentListing: listing, recentCrimes: crimeList, likes } = this.props

		return (
			<div>
				<DetailsBanner listingId={listing.ListingId}
							   address={listing.UnparsedAddress}
				               city={listing.City}
				               state={listing.StateOrProvince}
				               zip={listing.PostalCode}
				               bedrooms={listing.BedroomsTotal}
				               bathrooms={listing.BathroomsTotalInteger}
				               propertyType={listing.PropertySubType != null ? listing.PropertyType + ' ' + listing.PropertySubType : listing.PropertyType}
				               buildYear={listing.YearBuilt}
				               price={listing.ListPrice}
				               likes={likes.toString()}
				               handleLikeButton={this.handleLikeButton}
				/>
				<div className={'details-top-section'}>
					<Container className={'d-flex flex-wrap flex-md-nowrap mt-1'}>
						<DetailsImage imageSrc={'http://fpoimg.com/760x466'}
						              media={listing.Media}
						              virtualTour={listing.VirtualTourURLUnbranded}
						/>
						<AgentContactForm address={listing.UnparsedAddress}
						                  city={listing.City}
						                  state={listing.StateOrProvince}
						                  zip={listing.PostalCode}
						/>
					</Container>
					<Container>
						<div className={'crime-container'}>
							<FamilyFriendlyRating crimeList={crimeList} />
							<RecentCrimeReports crimeList={crimeList} centerLat={this.props.currentListing.Latitude} centerLng={this.props.currentListing.Longitude}/>
						</div>
					</Container>
				</div>
				<Container>
					<PropertyDetails
						propertyType={listing.PropertySubType != null ? listing.PropertyType + ' ' + listing.PropertySubType : listing.PropertyType}
						bedrooms={listing.BedroomsTotal}
						bathrooms={listing.BathroomsTotalInteger}
						buildYear={listing.YearBuilt}
						sqft={listing.LivingArea}
						price={listing.ListPrice}
						hoaFee={listing.AssociationFee}
						description={listing.PublicRemarks}
					/>
				</Container>
			</div>
		);
	}
}

DetailsPage.propTypes = {
	currentListing: PropTypes.object.isRequired,
	recentCrimes: PropTypes.object.isRequired,
	getCrimesList: PropTypes.func.isRequired,
	addProperty: PropTypes.func.isRequired,
	updateLikes: PropTypes.func.isRequired,
	getLikes: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
	currentListing: state.currentListing,
	recentCrimes: state.recentCrimes,
	likes: state.likes,
})

export default connect(mapStateToProps, {getCrimesList, addProperty, updateLikes, getLikes})(withRouter(DetailsPage));