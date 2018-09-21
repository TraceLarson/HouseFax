import React, {Component} from 'react';
import Search from '../components/Search'
import ResultsItem from '../components/ResultsItem'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class ResultsPage extends Component {


	render() {
		let resultItems = this.props.listings.map(listing => {
			return(
				<ResultsItem
					key={listing.ListingKey}
					id={listing.ListingId}
					price={listing.ListPrice}
					address={listing.UnparsedAddress}
					city={listing.City}
					state={listing.StateOrProvince}
					imageSRC={listing.Media[0].MediaURL}
				/>
			)
		})
		return (
			<div>
				<p>Results Page</p>
				<Search />
				<ResultsItem />
			</div>
		);
	}
}

ResultsPage.propTypes = {

}

const mapStateToProps = state => {
	listings: state.listings
}

export default connect(mapStateToProps)(withRouter(ResultsPage));