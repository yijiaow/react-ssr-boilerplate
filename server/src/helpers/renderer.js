import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { matchRoutes, renderMatches } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import routes from '../client/routes';

const handleRender = async (req, res, store) => {
  const matches = matchRoutes(routes, req.path) || [];
  const promises = matches.map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  );

  try {
    await Promise.all(promises);

    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {renderMatches(matches)}
        </StaticRouter>
      </Provider>
    );

    const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.__INITIAL_STATE__ = ${serialize(store.getState())}</script>
      <script src="bundle.js"></script>
    </body>
  </html>
`;

    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error on server');
  }
};

export default handleRender;
