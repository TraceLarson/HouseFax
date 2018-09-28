import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CrimeCard from "./CrimeCard";

class RecentCrimeReports extends Component {
	render() {

		let crimes = Object.keys(this.props.crimeList).map(key => {
			let crime = this.props.crimeList[key]
			if (key < 4) {
				return (
					<CrimeCard key={key}
					           latitude={crime.latitude}
					           longitude={crime.longitude}
					           occDateTime={crime.occ_date_time}
					           crimeType={crime.crime_type}
					           familyViolence={crime.family_violence}
					/>
				)
			} else {
				return ''
			}
		})

		return (
			<div>
				<h3>Most Recent Reports</h3>
				<div className={'crime-cards-container'}>
					{crimes}
				</div>
			</div>
		);
	}
}

RecentCrimeReports.propTypes = {};

export default RecentCrimeReports;
