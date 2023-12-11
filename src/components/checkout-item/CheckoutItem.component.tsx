import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import { CartItemProps } from '../cart-item/CartItem.component';

import {
	CheckoutItemContainer,
	CheckoutImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from './checkoutItem.styles';

const CheckoutItem: FC<CartItemProps> = ({ cartItem }) => {
	const dispatch = useDispatch();
	const { name, imageUrl, price, quantity } = cartItem;
	const cartItems = useSelector(selectCartItems);

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
	return (
		<CheckoutItemContainer>
			<CheckoutImageContainer>
				<img src={imageUrl} alt={name} />
			</CheckoutImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>{price}</BaseSpan>
			<RemoveButton onClick={clearItemHandler}>&#935;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
