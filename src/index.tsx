import React from 'react';

import { createRoot } from 'react-dom/client';

import { Reset } from 'styled-reset';

import GlobalStyle from './GlobalStyle';
import App from './App';

const container = document.getElementById('app');

const root = createRoot(container!);
root.render((
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
));
