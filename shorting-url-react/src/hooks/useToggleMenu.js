import { useState } from 'react';

const useTogleMenu = () => {
	const [state, setState] = useState(false);

	const onClick = () => {
		setState(!state);
	};

	return [state, onClick];
};

export default useTogleMenu;
