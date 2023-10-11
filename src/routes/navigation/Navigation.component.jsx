import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import CartIcon from '../../components/cart-icon/CartIcon.component';
import CartDropDown from '../../components/cart-dropdown/CartDropDown.component';

import { ReactComponent as AwsLogo } from '../../assets/logo.svg';

import { CartContext } from '../../context/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { LogoContainer, NavLinks, NavigationContainer, NavLink, GlobalContainer } from './navigation.styles';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
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
