import styled, { css } from 'styled-components';

type FormInputLabelProps = {
	shrink?: boolean;
};

const subColor = 'grey'; // From scss: $sub-color: grey;
const mainColor = 'black'; //From scss:  $main-color: black;

const shrinkLabelStyles = css`
	top: -18px;
	font-size: 12px;
	color: ${mainColor};
`;

export const FormInputLabel = styled.label<FormInputLabelProps>`
	color: $sub-color;
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	background: none;

	${({ shrink }) => shrink && shrinkLabelStyles}

	&.shrink {
		@include shrinkLabel();
	}
`;

export const Input = styled.input`
	background-color: white;
	color: ${subColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${subColor};
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${FormInputLabel} {
		${shrinkLabelStyles};
	}
`;
export const Group = styled.div`
	position: relative;
	margin: 45px 0;

	.form-input {
		background: none;
	}
	input[type='password'] {
		letter-spacing: 0.3em;
	}
`;
