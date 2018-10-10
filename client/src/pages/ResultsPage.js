import React, {Component} from 'react';
import Search from '../components/Search'
import ResultsItem from '../components/ResultsItem'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {Container, Row} from 'reactstrap'
import {setCurrentListing} from "../actions/api";


class ResultsPage extends Component {
	handleDetails = listing => {
		this.props.setCurrentListing(listing, this.props.history)
	}

	render() {
		let resultsItems = Object.keys(this.props.listings).map(key => {
			let listing = this.props.listings[key]
			return (
				<ResultsItem
					key={key}
					id={listing.ListingId}
					price={listing.ListPrice}
					address={listing.UnparsedAddress}
					city={listing.City}
					state={listing.StateOrProvince}
					zip={listing.PostalCode}
					media={listing.Media}
					handleDetails={() => this.handleDetails(listing)}
				/>
			)
		})

		return (
			<Container className={'px-5'}>
				<p>Results Page</p>
				<Search/>
				<Row>
					{resultsItems}
				</Row>
			</Container>
		);
	}
}

ResultsPage.propTypes = {
	listings: PropTypes.object.isRequired,
	setCurrentListing: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	listings: state.listings,
	currentListing: state.currentListing
})

export default connect(mapStateToProps, {setCurrentListing})(withRouter(ResultsPage));