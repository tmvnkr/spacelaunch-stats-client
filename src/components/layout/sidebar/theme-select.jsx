// import React, { useState } from 'react';
// import styled from 'styled-components';

// export default function ThemeSelect(props) {
//   const handleCheck = () => {
//     !checked ? setChecked(true) : setChecked(false);
//     props.handleThemeChange(checked);
//   };

//   const getCheckedFromLocalStorage = () => {
//     let isChecked = true;
//     localStorage.getItem('theme') === 'light'
//       ? (isChecked = true)
//       : (isChecked = false);
//     return isChecked;
//   };

//   const [checked, setChecked] = useState(getCheckedFromLocalStorage);

//   return (
//     <Background>
//       <SelectOpt
//         type="checkbox"
//         name="theme"
//         value="light"
//         checked={!checked ? false : true}
//         onChange={handleCheck}
//       />
//       Ligth mode
//     </Background>
//   );
// }

// const Background = styled.label`
//   color: ${props => props.theme.text};
// `;

// const SelectOpt = styled.input`
//   cursor: pointer;
//   width: 1.3em;
//   height: 1.3em;
// `;
