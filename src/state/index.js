import { GET_THEME } from '../queries';

const getTheme = () => {
  localStorage.getItem('themeApollo') !== null
    ? localStorage.getItem('themeApollo')
    : localStorage.setItem('themeApollo', +false);
  const theme = localStorage.getItem('themeApollo');
  return theme;
};

export const defaults = {
  theme: getTheme()
};

export const resolvers = {
  Mutation: {
    toggleTheme: (_parent, _args, { cache }) => {
      const previous = cache.readQuery({ query: GET_THEME });
      const data = { theme: !previous.theme };
      cache.writeData({ data });
      localStorage.setItem('themeApollo', +!previous.theme);
      return null;
    }
  }
};
