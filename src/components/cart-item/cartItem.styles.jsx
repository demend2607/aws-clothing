import { styled } from 'styled-components';

export const CartItemContainer = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	margin-bottom: 15px;
	img {
		width: 28%;
	}
`;

export const ItemDetails = styled.div`
	display: flex;
	width: 70%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;
	h2 {
		font-size: 16px;
	}
`;
