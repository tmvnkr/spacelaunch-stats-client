import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { defaults, resolvers } from './state';

const rootEl = document.getElementById('root');

// Set up the apollo-client to point at the server
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  clientState: {
    defaults,
    resolvers
  }
});

let render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>,
    rootEl
  );
};

// hot reloading for production [REMOVE] when dist
if (module.hot) {
  module.hot.accept('./main', () => {
    setTimeout(render);
  });
}

render();
