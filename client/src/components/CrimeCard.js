import React, {Component} from 'react';

class CrimeCard extends Component {
	render() {
		return (
			<div className={'card'}>
				<div className={'card-body'}>
				<strong className={'card-title'}>{this.props.crimeType}</strong>
				<p className={'card-text'}>{this.props.occDateTime}</p>
				</div>
			</div>
		);
	}
}

export default CrimeCard;