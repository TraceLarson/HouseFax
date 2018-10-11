import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="container">
				<div className="row text-center text-xs-center text-sm-left text-md-left">
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5 className={"text-primary"}>Pages</h5>
						<ul className="list-unstyled quick-links">
							<li><a className={"text-secondary"} href="#">Home</a></li>
							<li><a className={"text-secondary"} href="#">Login</a></li>
							<li><a className={"text-secondary"} href="#">Contact</a></li>
							<li><a className={"text-secondary"} href="#">About</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5 className={"text-primary"}>Data Resources</h5>
						<ul className="list-unstyled quick-links">
							<li><a className={"text-secondary"} href="#">Bridge API</a></li>
							<li><a className={"text-secondary"} href="#">Crime Reports API</a></li>
							<li><a className={"text-secondary"} href="#">Google APIs</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5 className={"text-primary"}>Inspiration</h5>
						<ul className="list-unstyled quick-links">
							<li><a className={"text-secondary"} href="#">Zillow</a></li>
							<li><a className={"text-secondary"} href="#">Trulia</a></li>
							<li><a className={"text-secondary"} href="#">Redfin</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5 className={"text-primary"}>Social Media</h5>
						<ul className="list-unstyled quick-links">
							<li><a className={"text-secondary"} href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
							<li><a className={"text-secondary"} href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
							<li><a className={"text-secondary"} href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
							<li><a className={"text-secondary"} href="#"><i className="fa fa-medium"></i> Medium</a></li>
							<li><a className={"text-secondary"} href="#"><i className="fa fa-pinterest"></i> Pinterest</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;