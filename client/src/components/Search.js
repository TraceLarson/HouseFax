import React, {Component} from 'react';
import {
	Container,
	Form,
	FormLabel,
	FormGroup,
	Input,
	FormText,
	Button
} from 'reactstrap'

class Search extends Component {
	render() {
		return (
			<Container className={'text-center'}>
				<p>Search Component</p>
				<Form onSubmit={''} >
					<FormGroup className={'d-flex'}>
						<Input type={'text'}/>
						<Button type={'submit'}>Search!</Button>
					</FormGroup>
				</Form>
			</Container>
		);
	}
}

export default Search;