import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

import { theme } from './styled-components/theme';
import GlobalStyle from './styled-components/globalStyles';
import { AppState } from './contexts/app-context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<AppState>
				<App />
			</AppState>
		</ThemeProvider>
	</React.StrictMode>
);
