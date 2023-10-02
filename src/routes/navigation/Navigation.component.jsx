import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/CartIcon.component';
import CartDropDown from '../../components/cart-dropdown/CartDropDown.component';

import { ReactComponent as AwsLogo } from '../../assets/logo.svg';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { LogoContainer, NavLinks, NavigationContainer, NavLink, GlobalContainer } from './navigation.styles';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<AwsLogo />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					<NavLink to="/contacts">CONTACT</NavLink>
					{currentUser ? (
						<NavLink onClick={signOutUser}>SIGN OUT</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropDown />}
			</NavigationContainer>
			<GlobalContainer>
				<Outlet />
			</GlobalContainer>
		</Fragment>
	);
};

export default Navigation;
