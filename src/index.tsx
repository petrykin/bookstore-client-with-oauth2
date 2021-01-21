import React from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
import { debugContextDevtool } from 'react-context-devtool';

import { App } from './components/App';
import Amplify from 'aws-amplify';

import { UserProvider } from './context/UserContext';

import awsconfig from './aws-exports';
import 'fomantic-ui-css/semantic.min.css';
import './styles/index.css';

Amplify.configure(awsconfig);

const container = document.getElementById('root');
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  container);
debugContextDevtool(container);