import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react'
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap'

const CrimeMarkerComponent = ({ text }) => <div><img src={'../images/crimeMarker.png'} alt={'crime marker'}/></div>;
const YourLocationComponent = ({ text }) => <div><img src={'../images/yourLocation.png'} alt={'your location'}/></div>;

class CrimeCard extends Component {
	state = {
		modal: false,
		center: {
			lat: this.props.centerLat,
			lng: this.props.centerLng
		},
		zoom: 15
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		})
	}


	render() {
		const now  = new Date()
		let then = this.props.occDateTime.toString()
		let dateThen = new Date(`${then}`)
		let timeDiffDay = (((((now - dateThen) / 1000)/60)/60)/24).toFixed(0)
		let timeDiffHr = (((((now - dateThen) / 1000)/60)/60)%24).toFixed(0)

		return (
			<div className={'card'}>
				<div className={'card-body'}>
					<strong className={'card-title'}>{this.props.crimeType}</strong>
					<p className={'card-text'}>{`${timeDiffDay} days and ${timeDiffHr} hours ago`}</p>
					<Button onClick={this.toggle}><strong>View On Map</strong></Button>
				</div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} size={'lg'} >
					<ModalHeader toggle={this.toggle}>{this.props.crimeType}</ModalHeader>
					<ModalBody >
						<div style={{height: '75vh', width: '100%'}}>
							<GoogleMapReact
								bootstrapURLKeys={{key: 'AIzaSyBorZD9Cb_bxgM6rZKwlrqTWTNX_O1n2kw'}}
								defaultCenter={this.state.center}
								defaultZoom={this.state.zoom}
							>
								<YourLocationComponent
									lat={this.props.centerLat}
									lng={this.props.centerLng}
								/>
								<CrimeMarkerComponent
									lat={this.props.latitude}
									lng={this.props.longitude}
									text={this.props.crimeType}
								/>
							</GoogleMapReact>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button onClick={this.toggle} >close</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default CrimeCard;