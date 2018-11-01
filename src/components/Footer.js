import React, {
	Component,
	Fragment
} from 'react';

class Footer extends Component {
	render() {
		return ( 
			<Fragment >
				<footer className="page-footer center-on-small-only">
					<div className="container-fluid">
					<div className="row">
						<div className="col-lg-2 ml-auto">
						<h5 className="title social-section-title">Social Media</h5>

						</div>
					</div>
					</div>
				</footer>
			</Fragment>
		);
	}
}

export default Footer;