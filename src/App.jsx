import React, { Fragment, useState } from 'react';
import { Router } from '@reach/router';
import GlobalStyle, { darkTheme, lightTheme } from './styles';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/layout/Container';
import Landing from './pages/Landing.jsx';
import Capsules from './pages/Capsules';
import Launchpads from './pages/Launchpads';
import { ThemeProvider } from 'styled-components';

export default function App() {
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

  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Sidebar handleThemeChange={handleThemeChange} />
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
