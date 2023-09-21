import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import Button from '../button/Button.component';

import CartItem from '../cart-item/CartItem.component';

import './cartDropDown.styles.scss';

const CartDropDown = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="cart-dropdown-container">
			{cartItems.length === 0 ? (
				<span className="empty-message">Card list is empty</span>
			) : (
				<div className={`cart-items ${cartItems.length >= 4 ? 'cart-overflow' : ''}   `}>
					{cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))}
				</div>
			)}

			<Button>Go to checkout</Button>
		</div>
	);
};

export default CartDropDown;
