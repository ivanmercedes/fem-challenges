import { Image } from '../styled-components/Image';
import { Nav, NavMenu } from '../styled-components/NavbarSt';

import logo from '../assets/logo.svg';
import { Col, Column, Container } from '../styled-components/container';
import { Button } from '../styled-components/Button';

const Navbar = () => {
	return (
		<Nav>
			<Container>
				<Column>
					<Col width='10%'>
						<Image src={logo} />
					</Col>

					<Col width='80%'>
						<NavMenu>
							<ul>
								<li>
									<a href='#'>Features</a>
								</li>
								<li>
									<a href='#'>Pricing</a>
								</li>
								<li>
									<a href='#'>Resources</a>
								</li>
							</ul>

							<ul>
								<li>
									<a href='#'>Login</a>
								</li>
								<li>
									<Button radius="30px" pa="1rem 2rem">Sign Up</Button>
								</li>
							</ul>
						</NavMenu>
					</Col>
				</Column>
			</Container>
		</Nav>
	);
};

export default Navbar;
