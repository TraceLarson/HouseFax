import React, {Component} from 'react';
import CrimeCard from "./CrimeCard";

class RecentCrimeReports extends Component {
	render() {

		let crimes = this.props.crimeList && Object.keys(this.props.crimeList).map(key => {
			let crime = this.props.crimeList[key]
			if (key < 4) {
				return (
					<CrimeCard key={key}
					           latitude={crime.latitude}
					           longitude={crime.longitude}
					           occDateTime={crime.occ_date_time}
					           crimeType={crime.crime_type}
					           familyViolence={crime.family_violence}
					           centerLat={this.props.centerLat}
					           centerLng={this.props.centerLng}
					           className={'col-md-6'}
					/>
				)
			} else {
				return ''
			}
		})

		return (
			<div>
				<h3>Most Recent Reports</h3>
				<div className={'row'}>
					<div className={'crime-cards-container'}>
						{crimes}
					</div>
				</div>
			</div>
		);
	}
}


export default RecentCrimeReports;
