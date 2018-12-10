import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import GlobalStyle, { color } from './styles';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/layout/Container';
import Landing from './pages/Landing.jsx';
import Capsules from './pages/Capsules';
import Launchpads from './pages/Launchpads';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={color.light}>
      <Fragment>
        <GlobalStyle />
        <Sidebar />
        <Container>
          <Router>
            <Landing path="/" />
            <Capsules path="capsules" />
            <Launchpads path="launchpads" />
          </Router>
        </Container>
      </Fragment>
    </ThemeProvider>
  );
}
