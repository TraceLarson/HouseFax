import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CrimeCard from "./CrimeCard";

class RecentCrimeReports extends Component {
    render() {
        return (
            <div>
                <CrimeCard/>
            </div>
        );
    }
}

RecentCrimeReports.propTypes = {};

export default RecentCrimeReports;