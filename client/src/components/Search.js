import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {getAllListings} from '../actions/api'
import {
	Container,
	Form,
	FormLabel,
	FormGroup,
	Input,
	FormText,
	Button
} from 'reactstrap'

class Search extends Component {

	state = {
		listings: []
	}

	componentWillMount() {
		this.props.getAllListings()
	}

	render() {
		return (
			<Container className={'text-center'}>
				<p>Search Component</p>
				<Form >
					<FormGroup className={'d-flex'}>
						<Input type={'text'}/>
						<Button type={'submit'}>Search!</Button>
					</FormGroup>
				</Form>
			</Container>
		);
	}
}

Search.propTypes = {
	getAllListings: PropTypes.func.isRequired,
	listings: PropTypes.array.isRequired
}

const mapStateToProps = state => {
	listings: state.listings
}

export default connect(mapStateToProps, {getAllListings})(withRouter(Search));