import React, { Component } from 'react';
import Graph from './scripts/components/graph'
import zoomPeriod from './scripts/functions/zoom/zoomPeriod'

export default class App extends React.Component {
  state = { dataSetIndex: 0 , }
  static defaultProps = {views: [["day"],["simpleDay"],["Macs"]]}

  selectDataset(event) {
    this.setState({dataSetIndex: event.target.value});
  }
  getData(allData) {
    let zoomData = zoomPeriod(allData,5,10)
    return zoomData
  }

  render() {
    let options = this.props.views.map((value, index) => {
      return <option key={index} value={index}>Ansicht {value}</option>
    });
    let data = this.getData(this.props.datasets)

    return (
      <div>
        <select
          value={this.state.dataSetIndex}
          onChange={this.selectDataset.bind(this)} >
          {options}
        </select>
        <Graph data={data} viewSelection={this.state.dataSetIndex} />
      </div>
    )
  }
}
