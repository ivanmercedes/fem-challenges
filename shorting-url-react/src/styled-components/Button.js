import styled from 'styled-components';

export const Button = styled.button`
	padding: 1rem;
	border-radius: ${props => props.radius || '5px'};
	border: 0;
	background-color: ${props => props.theme.colors.primary.cyan};
	color: white;
	font-weight: 700;
	transition: opacity 500ms ease;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
	}
`;
