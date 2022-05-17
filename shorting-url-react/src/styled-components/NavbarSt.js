import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	flex-wrap: wrap;
`;

export const NavMenu = styled.nav`
	display: flex;
	justify-content: space-between;

	@media (max-width: 568px) {
		flex-direction: column;
		background-color: white;
		position: fixed;
		right: 0;
		width: 100%;
		height: 100%;
		justify-content: start;
		transition: right 500ms linear;
		top: 5rem;
	}

	ul {
		margin: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		@media (max-width: 568px) {
			flex-direction: column;
			padding: 0;
		}
		li {
			margin: 0 1rem;

			@media (max-width: 568px) {
				margin: 0.5rem 0;
			}
		}
	}
`;
