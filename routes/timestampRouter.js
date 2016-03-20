// This helped clear up things
// http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/
var express = require('express'),
    bodyParser = require('body-parser');
var timestampRouter = express.Router();

timestampRouter.use(bodyParser.json());

/*
timestampRouter.route('/')
.all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
})
.get(function(req, res, next) {
  res.end('Welcome to the index page.');
});
*/

timestampRouter.route('/:data')
.get(function(req, res, next) {
  res.send(req.params.data);
});

module.exports = timestampRouter;
