import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './theme';
import { Sidebar, Container } from './components';
import { Landing, Capsules, Launchpads } from './pages';

export default function Main() {
  return (
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
  );
}
