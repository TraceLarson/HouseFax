import React, {Component} from 'react';
import PropTypes from 'prop-types'
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


class DetailsPage extends Component {

	state = {
		listing: {},
		crimeList: {}
	}

	componentWillMount() {
		// console.log('DetailsPage componentWillMount current listing:', this.props.currentListing)
		// console.log(this.props.currentListing.Latitude, this.props.currentListing.Longitude)
		// console.log('DetailsPage componentWillMount recent crime:', this.props.recentCrimes)

		let latitude = this.props.currentListing.Latitude
		let longitude = this.props.currentListing.Longitude

		this.props.getCrimesList(latitude, longitude)
	}


	componentDidUpdate(prevProps) {
		if (this.props.currentListing !== prevProps.currentListing){
			// console.log('componentDidUpdate ran')
			let latitude = this.props.currentListing.Latitude
			let longitude = this.props.currentListing.Longitude
			this.props.getCrimesList(latitude, longitude)
		}
	}



	render() {
		const listing = this.props.currentListing
		const crimeList = this.props.recentCrimes
		console.log(listing)

		return (
			<div>
				<DetailsBanner listingid={listing.ListingId}
							   address={listing.UnparsedAddress}
				               city={listing.City}
				               state={listing.StateOrProvince}
				               zip={listing.PostalCode}
				               bedrooms={listing.BedroomsTotal}
				               bathrooms={listing.BathroomsTotalInteger}
				               propertyType={listing.PropertySubType != null ? listing.PropertyType + ' ' + listing.PropertySubType : listing.PropertyType}
				               buildYear={listing.YearBuilt}
				               price={listing.ListPrice}
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
	getCrimesList: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
	currentListing: state.currentListing,
	recentCrimes: state.recentCrimes
})

export default connect(mapStateToProps, {getCrimesList})(withRouter(DetailsPage));