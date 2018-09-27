import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CrimeCard from "./CrimeCard";

class RecentCrimeReports extends Component {
    render() {

        let crimes = Object.keys(this.props.crimeList).map(key =>{
            let crime = this.props.crimeList[key]
            return(
	            <CrimeCard key={key}
                           latitude={crime.latitude}
                           longitude={crime.longitude}
                           occDateTime={crime.occ_date_time}
                           crimeType={crime.crime_type}
                           familyViolence={crime.family_violence}
	            />
            )
        })

        return (
            <div>
                <p>RecentCrimeReports Component</p>
                {crimes}
            </div>
        );
    }
}

RecentCrimeReports.propTypes = {};

export default RecentCrimeReports;
