import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {
	Container
} from 'reactstrap'

import DetailsBanner from '../components/DetailsBanner'
import FamilyFriendlyRating from "../components/FamilyFriendlyRating";

class DetailsPage extends Component {
	render() {
		return (
			<Container>
				<p>Details Page</p>
				<DetailsBanner />

				<FamilyFriendlyRating />

			</Container>
		);
	}
}

export default withRouter(DetailsPage);