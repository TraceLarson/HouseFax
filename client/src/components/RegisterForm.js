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
	render() {
		return (
			<Container>
				<Form action={'/user'} method={'POST'} className={'text-center'}>
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
						<Input type={'password'} name={'password'} placeholder={'Password'}/>
					</FormGroup>
					<FormGroup>
						<Label for={'repeatpassword'}> </Label>
						<Input type={'password'} name={'repeatpassword'} placeholder={'Repeat password'}/>
					</FormGroup>
					<Button type={'submit'} className={'btn btn-info'} >Sign Up!</Button>
				</Form>
			</Container>
		);
	}
}

export default RegisterForm;