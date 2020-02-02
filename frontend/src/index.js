import '@babel/polyfill';
import { ApolloProvider } from '@apollo/react-hooks';
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { render } from 'react-dom';

import client from './api/index';
import Root from './components/Root';

// TODO: Create basic todo list interface

const CreateGlobalStyle = createGlobalStyle`
  @import @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

render(
  <ApolloProvider client={client}>
    <CreateGlobalStyle />
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
);
