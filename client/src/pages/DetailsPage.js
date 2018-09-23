import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {
	Container
} from 'reactstrap'

import DetailsBanner from '../components/DetailsBanner'
import DetailsImage from "../components/DetailsImage";
import AgentContactForm from "../components/AgentContactForm";
import FamilyFriendlyRating from "../components/FamilyFriendlyRating";


class DetailsPage extends Component {
	render() {
		return (
			<Container>
				<p>Details Page</p>
				<DetailsBanner />
				<DetailsImage />
				<AgentContactForm/>
				<FamilyFriendlyRating/>


			</Container>
		);
	}
}

export default withRouter(DetailsPage);