import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid footer pl-4 pt-4">
				<div className="row text-center text-xs-center mb-4">
					<a href={"/"}><img src="../images/logo.png" alt="logo"/></a>
				</div>
				<div className="row text-center text-xs-center text-sm-left text-md-left">
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5 className={"text-primary font-weight-light"}>Pages</h5>
						<ul className="list-unstyled quick-links">
							<li><a className={"text-secondary"} href="/">Home</a></li>
							<li><a className={"text-secondary"} href="/Login">Login</a></li>
							<li><a className={"text-secondary disabled"} href="#">Contact</a></li>
							<li><a className={"text-secondary disabled"} href="#">About</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5 className={"text-primary font-weight-light"}>Data Resources</h5>
						<ul className="list-unstyled quick-links">
							<li><a className={"text-secondary"} href="https://rets.ly" target={"_blank"}>Bridge API</a></li>
							<li><a className={"text-secondary"} href="https://dev.socrata.com/foundry/data.austintexas.gov/mfej-x5pm" target={"_blank"}>Crime Reports API</a></li>
							<li><a className={"text-secondary"} href="https://developers.google.com/apis-explorer/#p/" target={"_blank"}>Google APIs</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5 className={"text-primary font-weight-light"}>Inspiration</h5>
						<ul className="list-unstyled quick-links">
							<li><a className={"text-secondary"} href="https://www.zillow.com/" target={"_blank"}>Zillow</a></li>
							<li><a className={"text-secondary"} href="https://www.trulia.com/" target={"_blank"}>Trulia</a></li>
							<li><a className={"text-secondary"} href="https://www.redfin.com/" target={"_blank"}>Redfin</a></li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-5 col-md-3">
						<h5 className={"text-primary font-weight-light"}>Social Media</h5>
						<ul className="list-unstyled quick-links">
							<li><a className={"text-secondary"} href="https://www.facebook.com/" target={"_blank"}><span className="fa fa-facebook"></span> &nbsp; Facebook</a></li>
							<li><a className={"text-secondary"} href="https://twitter.com/" target={"_blank"}><span className="fa fa-twitter"></span> &nbsp;Twitter</a></li>
							<li><a className={"text-secondary"} href="https://www.instagram.com/" target={"_blank"}><span className="fa fa-instagram"></span> &nbsp;Instagram</a></li>
							<li><a className={"text-secondary"} href="https://medium.com/" target={"_blank"}><span className="fa fa-medium"></span> &nbsp;Medium</a></li>
							<li><a className={"text-secondary"} href="https://www.pinterest.com/" target={"_blank"}><span className="fa fa-pinterest"></span> &nbsp;Pinterest</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;