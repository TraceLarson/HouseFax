import React, {Component} from 'react';
import {
	Collapse,
	Button,
	ListGroup,
	ListGroupItem
} from 'reactstrap'

class ProfileLikes extends Component {

	state = {
		collapse: true
	}

	toggle = () => {
		this.setState({
			collapse: !this.state.collapse
		})
	}

	render() {
		return (
			<div className={'container mt-5'}>
				<Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>likes</Button>
				<Collapse isOpen={this.state.collapse}>
					<ListGroup>
						<ListGroupItem>Property <button className={'btn btn-danger pull-right'}>X</button></ListGroupItem>
						<ListGroupItem>Property <button className={'btn btn-danger pull-right'}>X</button></ListGroupItem>
						<ListGroupItem>Property <button className={'btn btn-danger pull-right'}>X</button></ListGroupItem>
						<ListGroupItem>Property <button className={'btn btn-danger pull-right'}>X</button></ListGroupItem>
					</ListGroup>
				</Collapse>
			</div>
		);
	}
}

export default ProfileLikes;