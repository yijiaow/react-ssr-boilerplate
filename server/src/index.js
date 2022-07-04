import express from 'express';
import proxy from 'express-http-proxy';
import createStore from './helpers/createStore';
import handleRender from './helpers/renderer';
import createAxiosInstance from './helpers/createAxiosInstance';

const app = express();

app.use(
  '/api',
  proxy(process.env.REACT_SSR_API_URL, {
    proxyReqOptDecorator(proxyReqOpts, srcReq) {
      proxyReqOpts.headers['X-Forwarded-Host'] = 'localhost:3000';
      return proxyReqOpts;
    },
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const axiosInstance = createAxiosInstance({
    headers: {
      cookie: req.headers.cookie || '',
    },
  });
  const store = createStore({}, axiosInstance);
  handleRender(req, res, store);
});

app.listen(3000, () => {
  console.log('🚀 Listening on port 3000');
});
