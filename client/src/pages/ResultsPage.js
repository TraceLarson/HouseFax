import React, {Component} from 'react';
import Search from '../components/Search'
import ResultsItem from '../components/ResultsItem'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {Container, Row} from 'reactstrap'
import {setCurrentListing} from "../actions/api";


class ResultsPage extends Component {

	state = {
		errors: {}
	}

	componentDidMount() {
		const {errors} = this.props
		console.log(`**********\r\n ResultsPage componentDidMount ERRORS\r\n ${Object.keys(errors).length}\r\n**********`)

		this.setState({
			errors: this.props.errors
		})
	}

	handleDetails = listing => {
		this.props.setCurrentListing(listing, this.props.history)
	}

	componentWillReceiveProps(nextProps) {
		console.log(`**********\r\n ResultsPage componentWillReceiveProps ERRORS\r\n ${nextProps.errors}\r\n**********`)
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}


	render() {
		const {errors} = this.state
		console.log(`********* \r\n RESULTS PAGE ERRORS: \r\n${errors} \r\n ************`)


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
				<Search/>
				<Row>
					{Object.keys(errors).length !== 0 ? (<div className={'alert alert-danger container text-center'}><h4>{errors}</h4></div>) : resultsItems }

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
	currentListing: state.currentListing,
	errors: state.errors
})

export default connect(mapStateToProps, {setCurrentListing})(withRouter(ResultsPage));