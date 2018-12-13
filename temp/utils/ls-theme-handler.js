import { lightTheme, darkTheme } from '../styles';

export const localStorageThemeKey = 'dark-theme';
export const getLS = localStorage.getItem(localStorageThemeKey);

export default function localStorageThemeHandler() {
  return lightTheme;
}
