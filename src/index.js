import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import data from './data/data'
import data from './data/one_day'
var jsonData = require('json!./data/one_day1.json');

ReactDOM.render(<App datasets={jsonData}/>, document.getElementById('root'));
