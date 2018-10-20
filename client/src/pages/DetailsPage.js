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
	constructor(props) {
		super(props);

		this.state = {
			listing: {},
			crimeList: {},
			likes: 0
		}

		this.handleLikeButton = this.handleLikeButton.bind(this)
	}


	async componentDidMount() {
		console.log(`*****\r\nDetailsPage componentDidMount Ran\r\n`)
		const {Latitude: latitude, Longitude: longitude, ListingId: listingId} = this.props.currentListing
		console.log(`destructured props`)
		await this.props.getCrimesList(latitude, longitude, listingId)
		console.log(`ran props.getCrimesList`)
		await this.props.getLikes(listingId)
		console.log(`ran props.getLikes\r\n*******`)


	}

	shouldComponentUpdate() {
		return true
	}

	async handleLikeButton(e) {
		e.preventDefault()
		console.log(`*****\r\nDetailsPage pressed like button\r\n*********`)
		await this.props.addProperty(this.props.currentListing)
		await this.props.updateLikes(this.props.currentListing.ListingId)
		await this.props.getLikes(this.props.currentListing.ListingId)
		this.componentDidMount()

	}


	render() {
		const {currentListing: listing, recentCrimes: crimeList, likes} = this.props && this.props

		console.log(`******\r\nDetailsPage render:\r\n Likes: ${likes.Likes}\r\n****** `)

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
				               likes={likes.Likes}
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
						<div className={' row  d-flex justify-content-center  justify-content-lg-between'} style={{"max-height": "1000px"}}>
							<FamilyFriendlyRating className={'col-xs-12 col-md-6 '} crimeList={crimeList}/>
							<RecentCrimeReports className={'col-xs-12 col-md-6 '} crimeList={crimeList} centerLat={listing.Latitude}
							                    centerLng={listing.Longitude}/>
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
	likes: PropTypes.object.isRequired,
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