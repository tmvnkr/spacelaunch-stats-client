import React, { Fragment, useState, useEffect } from 'react';
import { Router } from '@reach/router';
import GlobalStyle, { darkTheme, lightTheme } from './styles';
import { Sidebar, Container } from './components';
import { Landing, Capsules, Launchpads } from './pages';
import { ThemeProvider } from 'styled-components';
import { Mutation, Query } from 'react-apollo';
import { TOGGLE_THEME, GET_THEME } from './queries';

export default function Main() {
  const getThemeFromLocalStorage = () => {
    if (localStorage.getItem('theme') === 'light') {
      return lightTheme;
    } else if (localStorage.getItem('theme') === 'dark') {
      return darkTheme;
    } else {
      localStorage.setItem('theme', 'dark');
      return darkTheme;
    }
  };

  const handleThemeChange = checked => {
    if (checked) {
      localStorage.setItem('theme', 'dark');
      setTheme(darkTheme);
    } else {
      localStorage.setItem('theme', 'light');
      setTheme(lightTheme);
    }
  };

  const theTheme = (
    <Query query={GET_THEME}>
      {({ data: { theme } }) => {
        return theme;
      }}
    </Query>
  );

  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Sidebar handleThemeChange={handleThemeChange} />
        <Container>
          <Mutation mutation={TOGGLE_THEME}>
            {toggleTheme => <button onClick={toggleTheme}>PUSH ME!</button>}
          </Mutation>
          <h1>{theTheme}</h1>
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
