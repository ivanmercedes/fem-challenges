import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 4.5rem;
	font-weight: 700;
	margin: 0 0 1rem 0;
	line-height: 1.1;

	@media (max-width: 568px) {
		font-size: 2.5rem;
		text-align: ${props => props.sMposition || 'unset'};
	}
`;

export const Paragraph = styled.p`
	font-size: 1rem;
	margin-top: 0;
	margin-bottom: 1rem;
	color: hsl(0, 0%, 75%);
	@media (max-width: 568px) {
		text-align: ${props => props.sMposition || 'unset'};
	}
`;
