require("babel-register");
var express = require('express');
var app = express();
// var data = require('./src/data/data').default;
var data = require('./src/data/big_data.json');

var svgRenderer = require('./src/scripts/svg_renderer').default;

app.get('/svg/0', function (req, res) {
  var svg = svgRenderer(data,0);
  res.send(svg);
});
app.get('/svg/1', function (req, res) {
  var svg = svgRenderer(data,1);
  res.send(svg);
});
app.get('/svg/2', function (req, res) {
  var svg = svgRenderer(data,2);
  res.send(svg);
});

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
