import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../helpers/createStore';
import App from './App';

const store = createStore(window.__INITIAL_STATE__);

ReactDOM.hydrateRoot(
  document.querySelector('#root'),
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
