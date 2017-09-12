import React, { Component } from 'react';
import Graph from './script/components/graph'

export default class App extends Component {
  render() {
    return (
      <Graph data={this.props.data} />
    );
  }
}
