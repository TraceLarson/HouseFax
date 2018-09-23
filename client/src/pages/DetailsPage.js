import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {
	Container
} from 'reactstrap'

import Detail from '../components/Detail'

class DetailsPage extends Component {
	render() {
		return (
			<Container>
				<p>Details Page</p>
				<Detail />
			</Container>
		);
	}
}

export default withRouter(DetailsPage);