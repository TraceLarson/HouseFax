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


class DetailsPage extends Component {

	state = {
		listing: {}
	}

	componentWillMount() {
		console.log(this.props.currentListing)
		this.setState({
			listing: this.props.currentListing
		})
	}

	render() {
		const listing = this.state.listing
		return (
			<div>
				<DetailsBanner address={listing.UnparsedAddress}
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
						<FamilyFriendlyRating/>
						<RecentCrimeReports/>
					</Container>
				</div>
				<Container>
					<PropertyDetails propertyType={listing.PropertySubType != null ? listing.PropertyType + ' ' + listing.PropertySubType : listing.PropertyType}
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
	currentListing: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	currentListing: state.currentListing
})

export default connect(mapStateToProps)(withRouter(DetailsPage));