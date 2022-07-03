import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import createStore from '../helpers/createStore';

const store = createStore();

ReactDOM.hydrateRoot(
  document.querySelector('#root'),
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);
