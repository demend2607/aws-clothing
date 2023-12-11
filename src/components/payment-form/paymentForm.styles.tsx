import styled from 'styled-components';

import Button from '../button/Button.component';

export const PaymentFormContainer = styled.div`
	/* margin-top: 40px; */
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const FormContainer = styled.form`
	height: 100px;
	min-height: 500px;
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
