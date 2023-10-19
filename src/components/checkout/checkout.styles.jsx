import { styled } from 'styled-components';

export const CheckoutContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	margin: 50px auto 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CheckoutHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
	width: 23%;
	&:last-child {
		width: 6%;
	}
`;

export const CheckoutTotal = styled.span`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;
