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
		const welcome = (window.location.href === ('http://' + window.location.host + '/Results')) ? '' : <h3>Family Friendly property search:</h3>

		return (
			<Container className={'text-center search-component'}>
				{welcome}
				<Form onSubmit={this.handleSubmit} className={'search-form'}>
					<FormGroup className={'d-flex'}>
						<Input className={'search-input'}
						       type={'text'}
						       placeholder={'Search for a property'}
						       onChange={this.handleChange}
						       value={this.state.location}/>
						<Button color={'primary'} className={'search-button'} type={'submit'}>GO!</Button>
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