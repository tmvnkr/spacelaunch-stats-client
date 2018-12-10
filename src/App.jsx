import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import GlobalStyle from './styles';
import Container from './components/layout/Container';
import Landing from './pages/Landing.jsx';

// Set up the apollo-client to point at the server
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: '/graphql',
    headers: {
      'client-name': 'Space Explorer [web]',
      'client-version': '1.0.0'
    }
  })
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Container>
        <Landing />
      </Container>
    </ApolloProvider>
  );
}
