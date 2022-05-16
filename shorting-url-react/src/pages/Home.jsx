import { Main } from '../Layouts';
import Form from '../components/Form';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<Main>
			<Navbar />
			<Header />
			<Form />
		</Main>
	);
};

export default Home;
