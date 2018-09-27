import React, {Component} from 'react';

class CrimeCard extends Component {
	render() {
		return (
			<div className={'card'}>
				<div className={'card-body'}>
				<h5 className={'card-title'}>{this.props.crimeType}</h5>
				<p className={'card-text'}>{this.props.occDateTime}</p>
				</div>
			</div>
		);
	}
}

export default CrimeCard;