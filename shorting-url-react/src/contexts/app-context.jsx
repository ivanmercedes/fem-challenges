import { getShortUrl } from '../services/public';
import { createUrlAdapter } from '../adapters/shorturl';

import { useReducer, useEffect, createContext } from 'react';

export const AppContext = createContext();

export const appReducer = (state, action) => {
	switch (action.type) {
		case 'fetch':
			return {
				...state,
				allUrls: [...state.allUrls, action.payload],
			};
		case 'setUrl':
			return {
				...state,
				url: action.payload,
			};
		default:
			return state;
	}
};

export const AppState = ({ children }) => {
	const initialState = {
		url: '',
		allUrls: [],
		error: null,
	};

	// Crear dispatch y state
	const [state, dispatch] = useReducer(appReducer, initialState);

	const setInitialState = async () => {
		dispatch({
			type: 'fetch',
			payload: JSON.parse(localStorage.getItem('urls')),
		});
	};

	const onChangeInput = url => {
		dispatch({
			type: 'setUrl',
			payload: url,
		});
	};

	const onClickShorten = async () => {
		if (!state.url) return;

		try {
			const response = await getShortUrl(
				`https://api.shrtco.de/v2/shorten?url=${state.url}`
			);

			if (localStorage.getItem('urls')) {
				localStorage.setItem(
					'urls',
					JSON.stringify([
						...JSON.parse(localStorage.getItem('urls')),
						createUrlAdapter(response),
					])
				);
			} else {
				localStorage.setItem(
					'urls',
					JSON.stringify([createUrlAdapter(response)])
				);
			}

			dispatch({
				type: 'fetch',
				payload: createUrlAdapter(response),
			});
		} catch (error) {
			console.log('Error: ', error);
		}
	};

	useEffect(() => {
		setInitialState();
	}, []);

	return (
		<AppContext.Provider
			value={{
				allUrls: state.allUrls,
				url: state.url,
				onClickShorten: onClickShorten,
				onChangeInput: onChangeInput,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
