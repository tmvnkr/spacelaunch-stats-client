import React, { useState, useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';

// Apollo client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

// Styled components - Global style
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: black;
    color: white;
  }
`;

function App() {
  // Setting state using useState hook
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = 'Count is ' + count;
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <GlobalStyle />
          <button onClick={() => setCount(count + 1)}> + Increment</button>
          <button onClick={() => setCount(count - 1)}> - Decrement</button>
          <div>Current: {count}</div>
          <Route exact path="/" to="/" />
          <Route exact path="/launch/:flight_number" to="/" />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
