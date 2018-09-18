// TODO: Get check password and re-enter password working

import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { registerUser} from '../actions/authentication'
import classnames from 'classnames'
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
		const {errors} = this.state.errors
		return (
			<Container className={'text-center'}>
				<h1>HouseFax</h1>
				<Form onSubmit={this.handleSubmit} >
					<FormGroup>
						<Label for={'firstname'}> </Label>
						<Input type={'text'}
						       name={'firstname'}
						       placeholder={'First name'}
						       className={classnames('form-control form-control-lg',{
						       	'is-invalid': errors.firstname
						       })}
						       onChange={this.handleInputChange}
						       value={this.state.firstname}
						/>
						{errors.firstname && (<div className={'invalid-feedback'}>{errors.firstname}</div>)}
					</FormGroup>
					<FormGroup>
						<Label for={'lastname'}> </Label>
						<Input type={'text'}
						       name={'lastname'}
						       placeholder={'Last name'}
						       className={classnames('form-control form-control-lg',{
							       'is-invalid': errors.lastname
						       })}
						       onChange={this.handleInputChange}
						       value={this.state.lastname}
						/>
						{errors.lastname && (<div className={'invalid-feedback'}>{errors.lastname}</div>)}
					</FormGroup>
					<FormGroup>
						<Label for={'email'}> </Label>
						<Input type={'email'}
						       name={'email'}
						       placeholder={'Email'}
						       className={classnames('form-control form-control-lg',{
							       'is-invalid': errors.email
						       })}
						       onChange={this.handleInputChange}
						       value={this.state.email}
						/>
						{errors.email && (<div className={'invalid-feedback'}>{errors.email}</div>)}
					</FormGroup>
					<FormGroup>
						<Label for={'password'}> </Label>
						<Input className={this.state.alert}
						       type={'password'}
						       name={'password'}
						       placeholder={'Password'}
						       className={classnames('form-control form-control-lg',{
							       'is-invalid': errors.password
						       })}
						       onChange={this.handleInputChange}
						       value={this.state.password}
						/>
						{errors.password && (<div className={'invalid-feedback'}>{errors.password}</div>)}
					</FormGroup>
					<FormGroup>
						<Label for={'password_confirm'}> </Label>
						<Input className={this.state.alert}
						       type={'password'}
						       name={'password_confirm'}
						       placeholder={'Confirm Password'}
						       className={classnames('form-control for-control-lg', {
						       	'is-invalid': errors.password_confirm
						       })}
						       onChange={this.handleInputChange}
						       value={this.state.password_confirm}
						/>
						{errors.password_confirm && (<div className={'invalid-feedback'}>{errors.password_confirm}</div>)}
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