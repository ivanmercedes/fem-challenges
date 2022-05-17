import { Button } from '../styled-components/Button';
import { Col, Column, Container } from '../styled-components/container';
import { Paragraph, Title } from '../styled-components/Text';

import Work from '../assets/illustration-working.svg';
import { HeaderContainer } from '../styled-components/HeaderSt';

const Header = () => {
	return (
		<HeaderContainer
			style={{
				backgroundImage: `url(${Work})`,
			}}
		>
			<Container>
				<Column>
					<Col width='40%'>
						<Title sMposition='center'>More than just shorter links</Title>
						<Paragraph sMposition='center'>
							Build your brand&apos;s recognition and get detailed insights on
							how your links are performaing.
						</Paragraph>

						<Button radius='30px'>Get Started</Button>
					</Col>
				</Column>
			</Container>
		</HeaderContainer>
	);
};

export default Header;
