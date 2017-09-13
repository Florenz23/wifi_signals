import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data/data'
// import data from './data/one_day'

ReactDOM.render(<App datasets={data}/>, document.getElementById('root'));
