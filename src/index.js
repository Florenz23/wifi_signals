import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import data from './data/data'
// import data from './data/one_day'
// var jsonData = require('json!./data/3data.json');
var jsonData = require('json!./data/big_data.json');

ReactDOM.render(<App datasets={jsonData}/>, document.getElementById('root'));
