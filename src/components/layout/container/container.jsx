import React from 'react';
import styled from 'styled-components';

export default function Container(props) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 76vw;
    padding-right: 2vw;
    padding-left: 22vw;
    margin-right: auto;
    margin-left: auto;
  `;

  return <Container>{props.children}</Container>;
}
