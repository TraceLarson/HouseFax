import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {
	Container
} from 'reactstrap'

import DetailsBanner from '../components/DetailsBanner'
import DetailsImage from "../components/DetailsImage";
import AgentContactForm from "../components/AgentContactForm";
import FamilyFriendlyRating from "../components/FamilyFriendlyRating";
import RecentCrimeReports from "../components/RecentCrimeReports";
import PropertyDetails from "../components/PropertyDetails";


class DetailsPage extends Component {
	render() {
		return (
			<Container>
				<p>Details Page</p>
				<DetailsBanner />
				<DetailsImage />
				<AgentContactForm />
				<FamilyFriendlyRating />
				<RecentCrimeReports />
				<PropertyDetails />


			</Container>
		);
	}
}

export default withRouter(DetailsPage);