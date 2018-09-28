import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


class FamilyFriendlyRating extends Component {
	state = {
		percentage: 75
	}


	render() {
		return (
			<div>
				<h3>Family Friendly Rating</h3>
				<div className={'family-friendly-rating-container dev-border'}>

					<CircularProgressbar
						percentage={this.state.percentage}
						text={`${this.state.percentage}%`}
						initialAnimation={true}
					/>
				</div>
			</div>
		)
	}
}

export default FamilyFriendlyRating;