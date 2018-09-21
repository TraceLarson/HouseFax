import React, {Component} from 'react';
import Search from '../components/Search'
import ResultsItem from '../components/ResultsItem'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class ResultsPage extends Component {

	componentDidMount() {
		console.log('ResultsPageProps',this.props.bridge.listings)
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('ShouldComponentUpdate ResultsPageProps',nextProps.bridge.listings)
	}

	render() {
		let resultItems
		this.props.bridge && (resultItems = this.props.bridge.listings.map(listing => {
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
		}))
		return (
			<div>
				<p>Results Page</p>
				<Search />
				{resultItems}
			</div>
		);
	}
}

ResultsPage.propTypes = {
	bridge: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
	bridge: state.bridge
})

export default connect(mapStateToProps)(withRouter(ResultsPage));