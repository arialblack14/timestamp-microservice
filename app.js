// Require needed modules
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

var timestampRouter = require('./routes/timestampRouter');
// Set port and hostname of server
var port = process.env.PORT || 3000,
    hostname = 'localhost';

//Build our app
var app = express();

// Use morgan for logging stuff in the console
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', timestampRouter);
// Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// Start the server
app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}`);
});
