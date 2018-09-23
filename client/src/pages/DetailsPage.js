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
            <Container>
                <p>Details Page</p>
                <DetailsBanner address={listing.UnparsedAddress}
                               city={listing.city}
                               state={listing.StateOrProvince}
							   zip={listing.PostalCode}
							   bedrooms={listing.BedroomsTotal}
							   bathrooms={listing.BathroomsTotalInteger}
							   propertyType={listing.PropertyType + ' ' + listing.PropertySubType && listing.PropertySubType}
							   buildYear={listing.YearBuilt}
							   price={listing.ListPrice}
                />
                <DetailsImage/>
                <AgentContactForm/>
                <FamilyFriendlyRating/>
                <RecentCrimeReports/>
                <PropertyDetails/>
            </Container>
        );
	}
}

DetailsPage.propTypes = {
	currentListing: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	currentListing: state.currentListing
})

export default connect(mapStateToProps )(withRouter(DetailsPage));