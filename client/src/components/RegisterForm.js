import React, {Component} from 'react';
import {
	Container,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from 'reactstrap'

class RegisterForm extends Component {
	render() {
		return (
			<Container>
				<Form>
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
						<Input type={'email'} name={'email'} placeholder={'Email address'}/>
					</FormGroup>
					<FormGroup>
						<Label for={'password'}> </Label>
						<Input type={'password'} name={'password'} placeholder={'Password'}/>
					</FormGroup>
					<FormGroup>
						<Label for={'repeatpassword'}> </Label>
						<Input type={'password'} name={'repeatpassword'} placeholder={'Repeat password'}/>
					</FormGroup>
				</Form>
			</Container>
		);
	}
}

export default RegisterForm;