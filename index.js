const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { log } = require('./helpers');

const app = express();

const serverPort = process.env.PORT || 3000;

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.listen(serverPort, () => log(`Server up! Port: ${serverPort}`));
