const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');

const { log } = require('./helpers');

const app = express();

const router = require('./routes')(express);

const server_port = process.env.PORT || 3000;

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(server_port, () => log(`Server restarted! Port: ${server_port}`));

module.exports = app;
