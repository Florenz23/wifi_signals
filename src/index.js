import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import data from './data/data'
// import data from './data/one_day'
// var jsonData = require('json!./data/3data.json');
// var jsonData = require('json!./data/new_data.json');
// var jsonData = require('json!./data/3entries_macs.json');
// var jsonData = require('json!./data/new_files/170912_a.json');
var jsonData = require('json!./data/new_files/170915.json');
// var jsonData = require('json!./data/big_data.json');
// var jsonData = require('json!./data/data_mac.json');


ReactDOM.render(<App datasets={jsonData}/>, document.getElementById('root'));
