import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="container">
				<div className="row text-center text-xs-center text-sm-left text-md-left">
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5>Pages</h5>
						<ul className="list-unstyled quick-links">
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Login</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Contact</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
							{/*<li><a href="#"><i className="fa fa-angle-double-right"></i>Videos</a></li>*/}
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5>Data Resources</h5>
						<ul className="list-unstyled quick-links">
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Videos</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5>Inspiration</h5>
						<ul className="list-unstyled quick-links">
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
							<li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i
								className="fa fa-angle-double-right"></i>Imprint</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5>Social Media</h5>
						<ul className="list-unstyled quick-links">
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
							<li><a href="#"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
							<li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i
								className="fa fa-angle-double-right"></i>Imprint</a></li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
						<ul className="list-unstyled list-inline social text-center">
							<li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
							<li className="list-inline-item"><a href="#" target="_blank"><i
								className="fa fa-envelope"></i></a></li>
						</ul>
					</div>
					<hr/>
				</div>
			</div>
		);
	}
}

export default Footer;