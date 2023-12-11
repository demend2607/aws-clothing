import { FC } from 'react';
import { CartItemContainer, ItemDetails } from './cartItem.styles';

import { CartItem as CartItemL } from '../../store/cart/cart.types';

export type CartItemProps = {
	cartItem: CartItemL;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<span>{name}</span>
				<span>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
