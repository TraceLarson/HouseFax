import React, {Component} from 'react';

class CrimeCard extends Component {
	render() {
		return (
			<div>
				<h5>{this.props.crimeType}</h5>
				<p>{this.props.occDateTime}</p>
			</div>
		);
	}
}

export default CrimeCard;