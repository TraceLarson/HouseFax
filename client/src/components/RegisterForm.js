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
		password: '',
		repeatpassword: '',
		alert: ''
	}

	setPassword = (e) => {
		e.preventDefault()

		this.setState({
			[e.target.name]: e.target.value
		})
	}

	// checkPassword = (e) => {
	// 	!this.ref.password.value === this.ref.repeatpassword.value ? this.setState({alert: 'danger'}) : this.setState({alert: ''})
	// }

	render() {
		return (
			<Container className={'text-center'}>
				<h1>HouseFax</h1>
				<Form action={'/user'} method={'POST'} >
					<FormGroup>
						<Label for={'firstname'}> </Label>
						<Input type={'text'} name={'firstname'} placeholder={'First name'}/>
					</FormGroup>
					<FormGroup>
						<Label for={'lastname'}> </Label>
						<Input type={'text'} name={'lastname'} placeholder={'Last name'}/>
					</FormGroup>
					<FormGroup>
						<Label for={'email'}> </Label>
						<Input type={'email'} name={'email'} placeholder={'Email'}/>
					</FormGroup>
					<FormGroup>
						<Label for={'password'}> </Label>
						<Input className={this.state.alert} onChange={this.setPassword}  type={'password'} name={'password'} placeholder={'Password'}/>
					</FormGroup>
					<FormGroup>
						<Label for={'repeatpassword'}> </Label>
						<Input className={this.state.alert} onChange={this.setPassword} type={'password'} name={'repeatpassword'} placeholder={'Repeat password'}/>
					</FormGroup>
					<Button type={'submit'} className={'btn btn-info'} >Sign Up!</Button>
				</Form>
			</Container>
		);
	}
}

export default RegisterForm;