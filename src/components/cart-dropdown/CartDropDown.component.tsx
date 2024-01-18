import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';

import Button from '../button/Button.component';
import CartItem from '../cart-item/CartItem.component';

import { CartDropdownContainer, EmptyMesssage, CartItems } from './cartDropDown.styles';

const CartDropDown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = useCallback(() => {
		navigate('/checkout');
	}, []);
	return (
		<CartDropdownContainer>
			{cartItems.length === 0 ? (
				<EmptyMesssage>Item list is empty</EmptyMesssage>
			) : (
				<CartItems>
					{cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))}
				</CartItems>
			)}
			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropDown;
