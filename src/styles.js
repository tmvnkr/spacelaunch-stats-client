import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#171c1f',
  secondary: '#1e2326',
  tertiary: '#303538',
  accent: '#e535ab',
  background: '#171c1f',
  grey: '#d8d9e0',
  text: '#fefefe',
  textSecondary: '#747790'
};

// Styled components - Global style
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Exo+2');
  html, body {
    height: '100%';
  }
  body {
    margin: 0;
    padding: 0 20%;
    font-family: 'Exo 2', sans-serif;
    background: ${colors.background};
    color: ${colors.text};
  }
  #root {
    display: 'flex';
    flex-direction: column;
  }
  * {
    box-sizing: 'border-box';
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
    line-height: 1em;
  }
  h2 {
    font-size: 1.8em;
  }
  h3 {
    font-size: 1.5em;
  }
  h5 {
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

export default GlobalStyle;
