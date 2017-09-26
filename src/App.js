import React, { Component } from 'react';
import Graph from './scripts/components/graph'

export default class App extends React.Component {
  state = { dataSetIndex: 0 , }
  static defaultProps = {views: [["day"],["simpleDay"],["Macs"]]}

  selectDataset(event) {
    this.setState({dataSetIndex: event.target.value});
  }

  render() {
    let options = this.props.views.map((value, index) => {
      return <option key={index} value={index}>Ansicht {value}</option>
    });

    return (
      <div>
        <select
          value={this.state.dataSetIndex}
          onChange={this.selectDataset.bind(this)} >
          {options}
        </select>
        <Graph data={this.props.datasets} viewSelection={this.state.dataSetIndex} />
      </div>
    )
  }
}
