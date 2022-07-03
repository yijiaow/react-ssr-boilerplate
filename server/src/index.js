import express from 'express';
import createStore from './helpers/createStore';
import handleRender from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();
  handleRender(req, res, store);
});

app.listen(3000, () => {
  console.log('🚀 Listening on port 3000');
});
