require("babel-register");
var express = require('express');
var app = express();

var fs = require('fs');
var ndjson = require('ndjson')
var request = require('request');

// var data = require('./src/data/data').default;
// let array = []
// fs.createReadStream('./src/data/new_files/170920.json')
//   .pipe(ndjson.parse())
//   .on('data', function(obj) {
//     array.push[obj]
//     // obj is a javascript object
//     start(app,data)
//   })
// data = array
// console.log(data)

//change file here
  var data = require('./src/data/new_files/170915.json');

  // var svgRenderer = require('./src/scripts/functions/svg_renderer').default;
  //
  // app.get('/svg/0', function (req, res) {
  //   var svg = svgRenderer(data,0);
  //   res.send(svg);
  // });
  // app.get('/svg/1', function (req, res) {
  //   var svg = svgRenderer(data,1);
  //   res.send(svg);
  // });
  // app.get('/svg/2', function (req, res) {
  //   var svg = svgRenderer(data,2);
  //   res.send(svg);
  // });
  app.get('/', function(req, res){
    console.log(req.query.time)
    console.log(req.query.moin)
    res.send('time: ' + req.query.time);
  });


  var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
    // let urlParameter = readUrl()
    // console.log(urlParameter)
  });



  function readUrl() {
    var url = require('url');
    console.log(url)
var url_parts = url.parse(request.url, true);
var query = url_parts.query;
var id = req.query.time;
      console.log(url)
      return
      let array = []
      let time = getParameterByName('time')
      let period = getParameterByName('period')
      time = parseInt(time)
      period = parseInt(period)
      array = [time,period]
      return array
  }


  function getParameterByName(name, url) {
      if (!url) var url = require('url');
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
