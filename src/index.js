import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { defaults, resolvers } from './state';

const rootEl = document.getElementById('root');

// Set up the apollo-client to point at the server
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
    headers: {
      'client-name': 'Space Explorer [web]',
      'client-version': '1.0.0'
    }
  }),
  clientState: {
    defaults,
    resolvers
  }
});

let render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}

render();
