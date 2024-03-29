import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
	display: flex;
	max-width: 900px;
	margin: 30px auto;
	justify-content: space-between;
	@media screen and (max-width: 950px) {
		align-items: center;
		flex-direction: column;
	}
`;
