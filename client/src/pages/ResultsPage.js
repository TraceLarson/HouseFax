import React, {Component} from 'react';
import Search from '../components/Search'
import ResultsItem from '../components/ResultsItem'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {Container, Row} from 'reactstrap'



class ResultsPage extends Component {

	handleDetails = listingKey => {
		console.log(listingKey)
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
					handleDetails={() => this.handleDetails(key)}
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
	listings: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	listings: state.listings
})

export default connect(mapStateToProps)(withRouter(ResultsPage));