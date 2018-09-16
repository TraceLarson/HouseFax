import React, {Component} from 'react';

import RegisterForm from '../components/RegisterForm'

class RegisterPage extends Component {
	render() {
		return (
			<div>
				<h1>Register page</h1>
				<RegisterForm />
			</div>
		);
	}
}

export default RegisterPage;