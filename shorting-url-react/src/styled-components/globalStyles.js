import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const {
	neutral: { veryDarkBlue, gray },
} = COLORS;

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: ${veryDarkBlue};
  }

  a{
    text-decoration: none;
    color: ${gray};
    transition: color 500ms ease;
    &:hover{
      color: ${veryDarkBlue};
    }
  }


  /* Menu toggle btn */
  .toggle-menu{
      display:none;
    }
  @media (max-width: 568px){
    .toggle-menu{
      display:unset;
    }
  }
  svg[data-show="false"] {
  	~	 #menu{
			 right: -500px;
		 }
	}
`;

export default GlobalStyle;
