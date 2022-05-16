import { useContext } from 'react';
import { AppContext } from '../contexts/app-context';
import { Container } from '../styled-components/container';
import { FormContainer } from '../styled-components/FormContainer';
import { InputUrl } from '../styled-components/InputUrl';
import { SubmitButton } from '../styled-components/SubmitButton';

const Form = () => {
	const appContext = useContext(AppContext);
	const { onClickShorten, onChangeInput, url } = appContext;

	return (
		<Container>
			<FormContainer>
				<InputUrl
					type='text'
					onChange={e => onChangeInput(e.target.value)}
					placeholder='Shorten a link here...'
					value={url}
				/>
				<SubmitButton type='button' onClick={() => onClickShorten()}>
					Shorten it!
				</SubmitButton>
			</FormContainer>
		</Container>
	);
};

export default Form;
