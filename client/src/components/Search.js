import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {getListings} from '../actions/api'
import {
	Container,
	Form,
	FormGroup,
	Input,
	Button
} from 'reactstrap'

class Search extends Component {
	state = {
		location: ''
	}

	handleChange = (e) =>{
		this.setState({
			location: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.getListings(this.state.location, this.props.history)
	}

	render() {
		return (
			<Container className={'text-center'}>
				<p>Search Component</p>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup className={'d-flex'}>
						<Input type={'text'} onChange={this.handleChange} value={this.state.location}/>
						<Button type={'submit'}>Search!</Button>
					</FormGroup>
				</Form>
			</Container>
		);
	}
}

Search.propTypes = {
	getListings: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	listings: state.listings
})

export default connect(mapStateToProps, {getListings})(withRouter(Search));