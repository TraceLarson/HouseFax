// TODO: Get check password and re-enter password working

import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { registerUser} from '../actions/authentication'
import {
	Container,
	Button,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap'



class RegisterForm extends Component {

	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		password_confirm: '',
		errors: {},
		alert: ''
	}

	handleInputChange = (e) => {
		e.preventDefault()
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const user = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			password: this.state.password,
			password_confirm: this.state.password_confirm
		}
		this.props.registerUser(user, this.props.history)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}


	render() {
		return (
			<Container className={'text-center'}>
				<h1>HouseFax</h1>
				<Form onSubmit={this.handleSubmit} >
					<FormGroup>
						<Label for={'firstname'}> </Label>
						<Input type={'text'}
						       name={'firstname'}
						       placeholder={'First name'}
						       onChange={this.handleInputChange}
						       value={this.state.firstname}
						/>
					</FormGroup>
					<FormGroup>
						<Label for={'lastname'}> </Label>
						<Input type={'text'}
						       name={'lastname'}
						       placeholder={'Last name'}
						       onChange={this.handleInputChange}
						       value={this.state.lastname}
						/>
					</FormGroup>
					<FormGroup>
						<Label for={'email'}> </Label>
						<Input type={'email'}
						       name={'email'}
						       placeholder={'Email'}
						       onChange={this.handleInputChange}
						       value={this.state.email}
						/>
					</FormGroup>
					<FormGroup>
						<Label for={'password'}> </Label>
						<Input className={this.state.alert}
						       type={'password'}
						       name={'password'}
						       placeholder={'Password'}
						       onChange={this.handleInputChange}
						       value={this.state.password}
						/>
					</FormGroup>
					<FormGroup>
						<Label for={'password_confirm'}> </Label>
						<Input className={this.state.alert}
						       type={'password'}
						       name={'password_confirm'}
						       placeholder={'Confirm Password'}
						       onChange={this.handleInputChange}
						       value={this.state.password_confirm}
						/>
					</FormGroup>
					<Button type={'submit'} className={'btn btn-info'} >Sign Up!</Button>
				</Form>
			</Container>
		);
	}
}

RegisterForm.propTypes = {
	registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(RegisterForm));