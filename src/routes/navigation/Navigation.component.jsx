import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as AwsLogo } from '../../assets/logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<div>
						<AwsLogo />
					</div>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					<Link className="nav-link" to="/contacts">
						CONTACT
					</Link>
					<Link className="nav-link" to="/auth">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
