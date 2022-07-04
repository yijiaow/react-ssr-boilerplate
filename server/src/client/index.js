import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../helpers/createStore';
import createAxiosInstance from '../helpers/createAxiosInstance';
import routes, { renderRoutes } from './routes';

const axiosInstance = createAxiosInstance();
const store = createStore(window.__INITIAL_STATE__, axiosInstance);

const Routes = () => useRoutes(routes);

ReactDOM.hydrateRoot(
  document.querySelector('#root'),
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);
