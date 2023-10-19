// import { useContext } from 'react';
// import { CartContext } from '../../context/cart.context';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { useNavigate } from 'react-router-dom';

import Button from '../button/Button.component';
import CartItem from '../cart-item/CartItem.component';

import { CartDropdownContainer, EmptyMesssage, CartItems } from './cartDropDown.styles';

const CartDropDown = () => {
	// const { cartItems } = useContext(CartContext);
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();
	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};
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
