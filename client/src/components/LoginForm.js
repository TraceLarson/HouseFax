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
	render() {
		return (
			<Container className={'text-center'}>
				<h1>HouseFax</h1>
				<Form action={''} method={'POST'}>
					<FormGroup>
						<Label className={'d-none'} htmlFor={'email'}>Email</Label>
						<Input name={'email'} type={'email'} placeholder={'email'}/>
					</FormGroup>
					<FormGroup>
						<Label className={'d-none'} htmlFor={'password'}>Password</Label>
						<Input name={'password'} type={'password'} placeholder={'Password'}/>
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