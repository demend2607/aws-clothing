import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, CheckoutTotal } from './checkout.styles';

import CheckoutItem from '../checkout-item/CheckoutItem.component';
import PaymentForm from './../payment-form/PaymentForm.component';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((cartItem) => {
				return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
			})}
			<CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
			<PaymentForm />
		</CheckoutContainer>
	);
};

export default Checkout;
