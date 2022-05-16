import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	flex-wrap: wrap;
`;

export const NavMenu = styled.nav`
	display: flex;
	justify-content: space-between;

	ul {
		margin: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		li {
			margin: 0 1rem;
		}
	}
`;
