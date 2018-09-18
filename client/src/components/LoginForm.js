import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loginUser} from '../actions/authentication'
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

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	render() {
		return (
			<Container className={'text-center'}>
				<h1>HouseFax</h1>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label className={'d-none'} htmlFor={'email'}>Email</Label>
						<Input name={'email'}
						       type={'email'}
						       placeholder={'email'}
						       onChange={this.handleInputChange}
						       value={this.state.email}
						/>
					</FormGroup>
					<FormGroup>
						<Label className={'d-none'} htmlFor={'password'}>Password</Label>
						<Input name={'password'}
						       type={'password'}
						       placeholder={'Password'}
						       onChange={this.handleInputChange}
						       value={this.state.password}
						/>
					</FormGroup>
					<Button type={'submit'}>Login</Button>
					<FormGroup>
						<Label>
							<Input type={'checkbox'} name={'rememberCheck'}/>
							Remember Me <a href={'#'}>Forgot password?</a>
						</Label>
					</FormGroup>
				</Form>
				<p>Don't have an account?  <a href={'/Register'}>Sign Up</a> </p>
			</Container>
		);
	}
}

LoginForm.propTypes = {
	errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(LoginForm);