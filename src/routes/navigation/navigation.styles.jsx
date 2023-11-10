import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const NavigationContainer = styled.div`
	height: 71px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	border-bottom: 1px solid darkgrey;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 10px 20px;
`;

export const NavLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

export const GlobalContainer = styled.div`
	width: 1400px;
	margin: 20px auto;
`;
