// TODO: Get check password and re-enter password working

import React, {Component} from 'react';
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


	}


	render() {
		return (
			<Container className={'text-center'}>
				<h1>HouseFax</h1>
				<Form onSubmit={this.handleSubmit} {/*action={'/user'} method={'POST'}*/} >
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

export default RegisterForm;