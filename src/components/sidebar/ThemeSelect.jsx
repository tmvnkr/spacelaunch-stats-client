import React, { useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: ${props => props.theme.primary};
`;

export const SelectOpt = styled.input`
  font-size: 1rem;
`;
export default function ThemeSelect(props) {
  const handleCheck = () => {
    !checked ? setChecked(true) : setChecked(false);
    props.handleThemeChange(checked);
  };
  const [checked, setChecked] = useState(false);
  return (
    <Background>
      <SelectOpt
        type="checkbox"
        name="theme"
        value="light"
        onChange={handleCheck}
      />
      Light
    </Background>
  );
}
