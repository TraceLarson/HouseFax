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
				<h3 className={'mb-3'}>Family Friendly Rating</h3>
				<div className={'family-friendly-rating-container'}>
					<CircularProgressbar
						percentage={this.state.percentage}
						text={`${this.state.percentage}%`}
						initialAnimation={true}
						strokeWidth={2}
						counterClockwise={true}
						styles={{
							path: { stroke: `rgba(62, 152, 199, ${this.state.percentage / 100})` },
							text: { fill: '#73cd1f', fontSize: '24px', fontWeight: '900'},
						}}
					/>
				</div>
			</div>
		)
	}
}

export default FamilyFriendlyRating;