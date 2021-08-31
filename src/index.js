import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:6006/graphql',
  cache: new InMemoryCache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
        <App />
  </ApolloProvider>,
  document.getElementById('root')
);
