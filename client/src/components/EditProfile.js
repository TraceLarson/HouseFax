import React from 'react';
import PropTypes from 'prop-types';

const EditProfile = props => {
	return (
		<div className={"container"}>
			<form onSubmit={props.handleSave}>
				<p className={"text-primary"}>Edit Profile</p>
				<p className={"text-primary"}>Member since: {props.created_at}</p>
				<div className={"form-group"}>
					<label className={"d-none"} htmlFor="firstname">first name</label>
					<input className={"form-control"}
					       type="text"
					       name={"firstname"}
					       id={"firstname"}
					       autoComplete={"off"}
					       defaultValue={props.firstname}
					       onChange={props.handleProfileChange}/>
				</div>
				<div className={"form-group"}>
					<label className={"d-none"} htmlFor="lastname">last name</label>
					<input className={"form-control"}
					       type="text" name={"lastname"}
					       id={"lastname"}
					       autoComplete={"off"}
					       defaultValue={props.lastname}
					       onChange={props.handleProfileChange}/>
				</div>
				<div className={"form-group"}>
					<label className={"d-none"} htmlFor="email">email</label>
					<input className={"form-control"}
					       type="email"
					       name={"email"}
					       id={"email"}
					       autoComplete={"off"}
					       defaultValue={props.email}
					       onChange={props.handleProfileChange}/>
				</div>
				<div className={"form-group"}>
					<label className={"d-none"} htmlFor="password">password</label>
					<input className={"form-control"}
					       type="password"
					       name={"password"}
					       id={"password"}
					       autoComplete={"off"}
					       defaultValue={props.password}
					       onChange={props.handleProfileChange}/>
				</div>
				<button className={"btn btn-primary"} type={"submit"}> Save</button>
			</form>
		</div>
	);
}

EditProfile.propTypes = {
	firstname: PropTypes.string,
	lastname: PropTypes.string,
	email: PropTypes.string,
	password: PropTypes.string,
	created_at: PropTypes.string,
	handleProfileChange: PropTypes.func,
	handleSave: PropTypes.func,
};


export default EditProfile;
