import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/CartIcon.component';
import CartDropDown from '../../components/cart-dropdown/CartDropDown.component';

import { ReactComponent as AwsLogo } from '../../assets/logo.svg';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutStart } from '../../store/user/user.action';

import { LogoContainer, NavLinks, NavigationContainer, NavLink, GlobalContainer } from './navigation.styles';
import Footer from '../../components/footer/Footer.component';

const Navigation = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutUser = () => dispatch(signOutStart());

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<AwsLogo />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					<NavLink to="/contact">CONTACT</NavLink>
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
			<Footer />
		</Fragment>
	);
};

export default Navigation;
