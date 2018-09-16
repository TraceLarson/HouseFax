import React, {Component} from 'react';


class LoginForm extends Component {
	render() {
		return (
			<div>
				<h1>HouseFax</h1>
				<form action={''} method={'POST'}>
					<label htmlFor={'username'}>Username</label>
					<input name={'username'} type={'text'} placeholder={'username'}/>
					<label htmlFor={'password'}>Password</label>
					<input name={'password'} type={'password'} placeholder={'Password'}/>
					<button type={'submit'}>Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;