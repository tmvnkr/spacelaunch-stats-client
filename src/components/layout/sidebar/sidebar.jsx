import React from 'react';
import styled from 'styled-components';
import StyledLink from './styled-link';
import { Mutation } from 'react-apollo';
import { TOGGLE_THEME } from '../../../queries';
import Countdown from '../../countdown/countdown';

export default function Sidebar() {
  return (
    <Background>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="capsules">Capsules</StyledLink>
      <StyledLink to="launchpads">Launchpads</StyledLink>
      <Mutation mutation={TOGGLE_THEME}>
        {toggleTheme => <button onClick={toggleTheme}>dd</button>}
      </Mutation>
      <Countdown launchDateUnix={1544992200} />
    </Background>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Background = styled.aside`
  height: 100%;
  width: 20vw;
  box-shadow: 4px -10px 20px 0px ${props => props.theme.sidebar};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.sidebar};
  overflow-x: hidden;
  padding-top: 20px;
`;
