import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

export default function Sidebar() {
  return (
    <Bar>
      Sidebar
      <Link to="/">
        <StyledLinks>Home</StyledLinks>
      </Link>
      <Link to="capsules">
        <h1>Capsules</h1>
      </Link>
      <Link to="launchpads">
        <h1>Launchpads</h1>
      </Link>
    </Bar>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Bar = styled.aside`
  height: 100%;
  width: 20vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`;

const StyledLinks = styled.h1`
  padding: 6px 8px 6px 16px;
  text-decoration: white;
  color: #818181;
  display: block;
  &:hover {
    color: #f1f1f1;
  }
`;
