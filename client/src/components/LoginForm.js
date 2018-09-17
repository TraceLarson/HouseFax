import React, {Component} from 'react';
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
		e.preventDefault()
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
		console.log(user)
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

export default LoginForm;