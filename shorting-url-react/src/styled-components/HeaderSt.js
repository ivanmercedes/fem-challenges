import styled from 'styled-components';

export const HeaderContainer = styled.header`
	background-repeat: no-repeat;
	background-position: right center;
	padding: 8rem 0px;

	@media (max-width: 568px) {
		background-position: top;
		padding: 3rem 0;
		padding-top: 16rem;
		padding-bottom: 2rem;
		background-size: contain;
	}
`;
