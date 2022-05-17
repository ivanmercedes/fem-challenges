import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
`;

export const Column = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: space-between;
	@media (max-width: 568px) {
		flex-direction: ${props => (props.row ? 'row' : 'column')};
	}
`;

export const Col = styled.div`
	flex: 0 0 ${props => props.width || '30%'};
	width: ${props => props.width || '30%'};
	margin: 1rem 0;

	@media (max-width: 568px) {
		order: ${props => props.order};
		width: ${props => props.sm || '100%'};
		flex: 0 0 ${props => props.sm || '100%'};
		text-align: ${props => props.position || 'center'};
	}
`;
