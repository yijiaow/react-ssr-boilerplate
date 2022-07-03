import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

const handleRender = (req, res, store) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
`;

  res.send(html);
};

export default handleRender;
