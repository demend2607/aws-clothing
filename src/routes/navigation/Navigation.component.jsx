import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/CartIcon.component';
import CartDropDown from '../../components/cart-dropdown/CartDropDown.component';

import { ReactComponent as AwsLogo } from '../../assets/logo.svg';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

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
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropDown />}
			</div>
			<div className="global-container">
				<Outlet />
			</div>
		</Fragment>
	);
};

export default Navigation;
