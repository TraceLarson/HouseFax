import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loginUser} from '../actions/authentication'
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'
import {
	Container,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap'


class LoginForm extends Component {

	state = {
		email: '',
		password: '',
		errors: {}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const user = {
			email: this.state.email,
			password: this.state.password
		}
		this.props.loginUser(user)
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	render() {
		const {errors} = this.state
		return (
			<Container className={'text-center'}>
				<h1>HouseFax</h1>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label className={'d-none'} htmlFor={'email'}>Email</Label>
						<Input name={'email'}
						       type={'email'}
						       placeholder={'email'}
						       className={classnames('form-control form-control-lg', {
							       'is-invalid': errors.email
						       })}
						       onChange={this.handleInputChange}
						       value={this.state.email}
						/>
						{errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
					</FormGroup>
					<FormGroup>
						<Label className={'d-none'} htmlFor={'password'}>Password</Label>
						<Input name={'password'}
						       type={'password'}
						       placeholder={'Password'}
						       className={classnames('form-control form-control-lg', {
							       'is-invalid': errors.password
						       })}
						       onChange={this.handleInputChange}
						       value={this.state.password}
						/>
						{errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
					</FormGroup>
					<Button type={'submit'}>Login</Button>
					<FormGroup>
						<Label>
							<Input type={'checkbox'} name={'rememberCheck'}/>
							Remember Me <a href={'/Login'}>Forgot password?</a>
						</Label>
					</FormGroup>
				</Form>
				<p>Don't have an account?  <a href={'/Register'}>Sign Up</a> </p>
			</Container>
		);
	}
}

LoginForm.propTypes = {
	errors: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	errors: state.errors,
	auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm));