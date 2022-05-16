import styled from 'styled-components';

import bgShorten from '../assets/bg-shorten-desktop.svg';
import smBgShorten from '../assets/bg-shorten-mobile.svg';

export const FormContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: ${props => props.theme.colors.primary.darkViolet};
	background-image: url(${bgShorten});
	background-size: cover;
	width: 100%;
	max-width: 650px;
	padding: 2.5rem;
	justify-content: space-between;
	border-radius: 5px;

	input {
		width: 100%;
		max-width: 460px;
	}

	@media (max-width: 568px) {
		background-image: url(${smBgShorten});
	}
`;
