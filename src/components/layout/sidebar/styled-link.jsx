import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const styledLink = ({ children, ...props }) => (
  <StyledLink {...props}>{children}</StyledLink>
);

const StyledLink = styled(Link)`
  padding: 6px 8px 6px 16px;
  font-size: 2em;
  text-decoration: none;
  color: ${props => props.theme.text};
  display: block;
  &:hover {
    color: #f1f1f1;
  }
`;

export default styledLink;
