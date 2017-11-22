const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const booksRouter = require('./server/routes/books');

const port = process.env.PORT || 3000;
const app = express();

/**
 * Set our body parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * Declare our static files path
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

/**
 * Declare our web service books api
 */
app.use('/books', booksRouter());

/**
 * Connect to our database
 */

/**
 * Start listening on the configured port number
 */
const server = app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});

module.exports = server;